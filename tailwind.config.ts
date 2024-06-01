import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.svelte', './src/**/*.ts', './src/**/*.html'],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config;
