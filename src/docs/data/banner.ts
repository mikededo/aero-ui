import type { ComponentData } from './index.js';

export const data: ComponentData = {
  base: 'HTMLAttributes<HTMLDivElement>',
  properties: {
    destructive: {
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Apply destructive styles'
    },
    withTransition: {
      type: 'boolean',
      required: false,
      default: 'false',
      description: 'Show/hide the banner with transitions'
    }
  }
};
