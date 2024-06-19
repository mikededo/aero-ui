import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

import { Paths } from '$config/index.js';
import type { ComponentData } from '$docs/data/index.js';

import type { PageLoad } from './$types.js';

type DocFile = { default: SvelteComponent };
type DataFile = { data?: ComponentData };
type DocResolver<T extends DocFile | DataFile> = () => Promise<T>;

// TODO: Refactor
const slugFromModulePath = (path: string) =>
  path.replace(Paths.actions.content, '').replace('.md', '');
const slugFromDataPath = (path: string) => path.replace(Paths.actions.data, '').replace('.ts', '');

const getData = async (slug: string) => {
  // Cannot replace with Paths as import.meta.glob cannot analyse variables
  const modules = import.meta.glob('/src/docs/content/actions/*.md');
  const dataModules = import.meta.glob('/src/docs/data/actions/*.ts');

  let moduleMatch: { path?: string; resolver?: DocResolver<DocFile> } = {};
  let dataMatch: { path?: string; resolver?: DocResolver<DataFile> } = {};

  let next = '';
  let prev = '';
  for (const [path, resolver] of Object.entries(modules)) {
    const component = slugFromModulePath(path);
    if (component === slug) {
      moduleMatch = { path, resolver: resolver as unknown as DocResolver<DocFile> };
      continue;
    }
    if (!moduleMatch.path) {
      prev = component;
    } else {
      next = component;
      break;
    }
  }

  for (const [path, resolver] of Object.entries(dataModules)) {
    if (slugFromDataPath(path) === slug) {
      dataMatch = { path, resolver: resolver as unknown as DocResolver<DataFile> };
      break;
    }
  }

  const [doc, data] = await Promise.all([moduleMatch.resolver?.(), dataMatch.resolver?.()]);

  if (!doc) {
    error(404);
  }

  return { doc, properties: data?.data, navigation: { next, prev } };
};

export const load: PageLoad = async ({ params }) => ({
  ...(await getData(params.slug))
});
