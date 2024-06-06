type NavigationItem = {
  title: string;
  path: string;
};
type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};
export type Navigation = NavigationGroup[];

const components = Object.keys(import.meta.glob('/src/content/**/*.md')).reduce<NavigationItem[]>(
  (acc, path) => {
    let folder = path.replace('/src/content/', '').replace('.md', '');
    if (!folder) {
      return acc;
    }

    const title = `${folder.charAt(0).toUpperCase()}${folder.slice(1)}`.replace(/-/g, ' ');
    return [...acc, { title, path: `/docs/components/${folder}` }];
  },
  []
);

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
