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

// Cannot replace with Paths.components as import.meta.glob cannot analyse variables
const components = Object.keys(import.meta.glob('/src/docs/content/**/*.md')).reduce<
  NavigationItem[]
>((acc, path) => {
  let folder = path.replace(Paths.content, '').replace('.md', '');
  if (!folder) {
    return acc;
  }

  const title = `${folder.charAt(0).toUpperCase()}${folder.slice(1)}`.replace(/-/g, ' ');
  return [...acc, { title, path: `${Routes.components}${folder}` }];
}, []);

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
    items: [
      { title: 'JSIndicator', path: '/docs/utilities/js-indicator' },
      { title: 'TailwindIndicator', path: '/docs/utilities/tailwind-indicator' }
    ]
  },
  {
    title: 'Other',
    items: [{ title: 'Roadmap', path: '/docs/roadmap' }]
  }
];
