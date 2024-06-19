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

const defaultRenamer = (path: string) =>
  `${path.charAt(0).toUpperCase()}${path.slice(1)}`.replace(/-/g, ' ');
const multiwordRenamer = (path: string) =>
  path
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

const items = (
  entries: ReturnType<ImportMeta['glob']>,
  route: keyof typeof Routes,
  renamer: (path: string) => string = defaultRenamer
) =>
  Object.keys(entries).reduce<NavigationItem[]>((acc, path) => {
    let folder = path.replace(Paths[route].content, '').replace('.md', '');
    if (!folder) {
      return acc;
    }

    const title = renamer(folder);
    return [...acc, { title, path: `${Routes[route]}${folder}` }];
  }, []);

// Cannot replace with Paths.components as import.meta.glob cannot analyse variables
const actions = items(
  import.meta.glob('/src/docs/content/actions/*.md'),
  'actions',
  multiwordRenamer
);
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
    title: 'Actions',
    items: actions
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
