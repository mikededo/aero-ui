import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

import { aero, theme } from './src/lib/tailwind';

export default {
  content: ['./src/**/*.svelte', './src/**/*.ts', './src/**/*.html'],
  theme: {
    ...theme,
    extend: {
      ...theme.extend,
      height: {
        topbar: defaultTheme.spacing[12],
        'full-topbar': `calc(100vh - ${defaultTheme.spacing[12]})`
      },
      minHeight: {
        topbar: defaultTheme.spacing[12],
        'full-topbar': `calc(100vh - ${defaultTheme.spacing[12]})`
      }
    }
  },
  plugins: [aero()]
} satisfies Config;
