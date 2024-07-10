import type { ComponentData } from '../index.js';

export const data: ComponentData = {
  base: null,
  properties: {
    initialTheme: {
      type: 'Theme',
      required: false,
      default: '"light"',
      description: 'The initial theme to set.'
    },
    onThemeChange: {
      type: '(theme: Theme) => void',
      required: false,
      description: 'The callback to call when the theme changes.'
    }
  },
  types: {
    Theme: '"system" | "light" | "dark"'
  }
};
