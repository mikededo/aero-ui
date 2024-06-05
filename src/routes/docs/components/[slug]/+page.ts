import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

import type { PageLoad } from './$types.js';

type DocFile = { default: SvelteComponent };
type DocResolver = () => Promise<DocFile>;

const slugFromPath = (path: string) => path.replace('/src/content/', '').replace('.md', '');

const getDoc = async (slug: string) => {
  const modules = import.meta.glob('/src/content/**/*.md');

  let match: { path?: string; resolver?: DocResolver } = {};

  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === slug) {
      match = { path, resolver: resolver as unknown as DocResolver };
      break;
    }
  }

  const doc = await match?.resolver?.();

  if (!doc) {
    error(404);
  }

  return doc;
};

export const load: PageLoad = async ({ params }) => ({
  ...(await getDoc(params.slug))
});
