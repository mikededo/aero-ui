import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

import { Paths } from '$config/index.js';
import type { ComponentData } from '$docs/data/components/index.js';

import type { PageLoad } from './$types.js';

type DocFile = { default: SvelteComponent };
type DataFile = { data: ComponentData };
type DocResolver<T extends DocFile | DataFile> = () => Promise<T>;

const slugFromModulePath = (path: string) =>
  path.replace(Paths.components.content, '').replace('.md', '');
const slugFromDataPath = (path: string) =>
  path.replace(Paths.components.data, '').replace('.ts', '');

const getData = async (slug: string) => {
  // Cannot replace with Paths as import.meta.glob cannot analyse variables
  const modules = import.meta.glob('/src/docs/content/components/*.md');
  const dataModules = import.meta.glob('/src/docs/data/components/*.ts');

  let moduleMatch: { path?: string; resolver?: DocResolver<DocFile> } = {};
  let dataMatch: { path?: string; resolver?: DocResolver<DataFile> } = {};

  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromModulePath(path) === slug) {
      moduleMatch = { path, resolver: resolver as unknown as DocResolver<DocFile> };
      break;
    }
  }

  let next = '';
  let prev = '';
  for (const [path, resolver] of Object.entries(dataModules)) {
    const component = slugFromDataPath(path);
    if (component === slug) {
      dataMatch = { path, resolver: resolver as unknown as DocResolver<DataFile> };
      continue;
    }
    if (!dataMatch.path) {
      prev = component;
    } else {
      next = component;
      break;
    }
  }

  const [doc, data] = await Promise.all([moduleMatch.resolver?.(), dataMatch.resolver?.()]);

  if (!doc || !data) {
    error(404);
  }

  return { doc, properties: data.data, navigation: { next, prev } };
};

export const load: PageLoad = async ({ params }) => ({
  ...(await getData(params.slug))
});
