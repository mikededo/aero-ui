import { Paths, Routes } from '$config/index.js';

type NavigationItem = {
  title: string;
  path: string;
};
type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};
export type Navigation = NavigationGroup[];

const items = (entries: ReturnType<ImportMeta['glob']>, route: keyof typeof Routes) =>
  Object.keys(entries).reduce<NavigationItem[]>((acc, path) => {
    let folder = path.replace(Paths[route].content, '').replace('.md', '');
    if (!folder) {
      return acc;
    }

    const title = `${folder.charAt(0).toUpperCase()}${folder.slice(1)}`.replace(/-/g, ' ');
    return [...acc, { title, path: `${Routes[route]}${folder}` }];
  }, []);

// Cannot replace with Paths.components as import.meta.glob cannot analyse variables
const components = items(import.meta.glob('/src/docs/content/components/*.md'), 'components');
const utilities = items(import.meta.glob('/src/docs/content/utilities/*.md'), 'utilities');

export const navigation: Navigation = [
  {
    title: 'Overview',
    items: [
      { title: 'Installation', path: '/docs/installation' },
      { title: 'Theming', path: '/docs/theming' },
      { title: 'Typography', path: '/docs/typography' },
      { title: 'Tokens', path: '/docs/tokens' }
    ]
  },
  {
    title: 'Components',
    items: components
  },
  {
    title: 'Utilities',
    items: utilities
  },
  {
    title: 'Other',
    items: [{ title: 'Roadmap', path: '/docs/roadmap' }]
  }
];
