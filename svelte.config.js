import { resolve } from 'path';
import { URL, fileURLToPath } from 'url';

import { escapeSvelte, mdsvex } from '@huntabyte/mdsvex';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { toHtml } from 'hast-util-to-html';
import rehypePrettyCode from 'rehype-pretty-code';
import { getHighlighter } from 'shiki';
import { visit } from 'unist-util-visit';

/**
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('unified').Transformer<HastRoot, HastRoot>} HastTransformer
 * @typedef {import('unified').Transformer<MdastRoot, MdastRoot>} MdastTransformer
 */

/** @type {[RegExp, string][]} */
const entities = [
  [/</g, '&lt;'],
  [/>/g, '&gt;'],
  [/{/g, '&#123;'],
  [/}/g, '&#125;']
];

/**
 * @returns {MdastTransformer}
 */
function remarkEscapeSvelte() {
  return async (tree) => {
    visit(tree, 'inlineCode', escape);

    /**
     * @param {import('mdast').InlineCode} node
     */
    function escape(node) {
      for (let i = 0; i < entities.length; i += 1) {
        node.value = node.value.replace(entities[i][0], entities[i][1]);
      }
    }
  };
}

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: 'catppuccin-macchiato',
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      // @ts-expect-error we're modifying the node type
      node.children = { type: 'text', value: ' ' };
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = ['line--highlighted'];
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ['chars--highlighted'];
  },
  getHighlighter: (options) =>
    getHighlighter({
      ...options,
      langs: [
        'plaintext',
        import('shiki/langs/svelte.mjs'),
        import('shiki/langs/typescript.mjs'),
        import('shiki/langs/css.mjs'),
        import('shiki/langs/javascript.mjs'),
        import('shiki/langs/json.mjs'),
        import('shiki/langs/shellscript.mjs')
      ],
      themes: [import('shiki/themes/catppuccin-macchiato.mjs')]
    })
};

const rehypeRenderCode = () => async (tree) => {
  let counter = 0;
  visit(tree, (node) => {
    if (
      node?.type === 'element' &&
      (node?.tagName === 'Components.pre' || node?.tagName === 'pre')
    ) {
      counter++;

      const isNonPP = counter % 2 === 0;
      if (isNonPP) {
        node.properties = {
          ...node.properties,
          'data-non-pp': ''
        };
      }

      const codeEl = node.children[0];
      if (codeEl.type === 'element' && codeEl.tagName !== 'code') {
        return;
      }

      if (codeEl.type === 'element') {
        const meltString = tabsToSpaces(
          toHtml(codeEl, { allowDangerousCharacters: true, allowDangerousHtml: true })
        );

        //@ts-expect-error we're modifying the node type
        codeEl.type = 'raw';
        //@ts-expect-error this is now a raw node which has a value property
        codeEl.value = `{@html \`${escapeSvelte(meltString)}\`}`;
      }
    }
  });
};

const rehypeComponentPreToPre = () => async (tree) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'Components.pre') {
      node.tagName = 'pre';
    }
  });
};

const rehypePreToComponentPre = () => async (tree) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      node.tagName = 'Components.pre';
    }
  });
};

const tabsToSpaces = (code) => code.replaceAll('    ', '  ').replaceAll('\t', '  ');

/** @type {Parameters<typeof mdsvex>[0]} */
const mdsvexOptions = {
  extensions: ['.md'],
  layout: resolve(
    fileURLToPath(new URL('.', import.meta.url)),
    'src/components/markdown/layout.svelte'
  ),
  smartypants: {
    quotes: false,
    ellipses: false,
    backticks: false,
    dashes: false
  },
  remarkPlugins: [remarkEscapeSvelte],
  rehypePlugins: [
    rehypeComponentPreToPre,
    [rehypePrettyCode, rehypePrettyCodeOptions],
    rehypeRenderCode,
    rehypePreToComponentPre
  ]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: sequence([mdsvex(mdsvexOptions), vitePreprocess(), preprocessMeltUI()]),
  vitePlugin: { inspector: true },
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/components',
      $docs: 'src/docs'
    }
  }
};

export default config;
