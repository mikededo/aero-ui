type NavigationItem = {
  title: string;
  path: string;
};
type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};
export type Navigation = NavigationGroup[];

const components = Object.keys(import.meta.glob('/src/lib/components/**/index.ts')).reduce<
  NavigationItem[]
>((acc, path) => {
  let folder = path.replace('/src/lib/components/', '').replace('index.ts', '');
  if (!folder) {
    return acc;
  }

  folder = folder.slice(0, -1);
  const title = `${folder.charAt(0).toUpperCase()}${folder.slice(1)}`;
  return [...acc, { title, path: `/docs/components/${folder}` }];
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
    items: [
      ...components,
      { title: 'Bottom sheet', path: '/docs/components/bottom-sheet' },
      { title: 'Button', path: '/docs/components/button' },
      { title: 'Dialog', path: '/docs/components/dialog' },
      { title: 'Icon button', path: '/docs/components/icon-button' },
      { title: 'Select', path: '/docs/components/select' }
    ]
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
