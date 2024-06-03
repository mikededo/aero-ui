type NavigationItem = {
  title: string;
  path: string;
};
type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};
export type Navigation = NavigationGroup[];

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
  }
];
