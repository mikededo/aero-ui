import type { ComponentData } from '../index.js';

export const data: ComponentData = {
  base: 'HTMLButtonAttributes | HTMLAnchorAttributes',
  properties: {
    variant: {
      type: 'ButtonVariant',
      required: false,
      default: "'default'",
      description: 'The variant of the button'
    },
    color: {
      type: 'ButtonColor',
      required: false,
      default: "'primary'",
      description: 'The color of the button'
    },
    href: {
      type: 'string',
      required: false,
      description:
        'The URL to navigate to when the button is clicked. It will use an anchor as an element for the component'
    }
  },
  types: {
    ButtonVariant: "'condensed' | 'default' | 'expanded'",
    ButtonColor: "'primary' | 'secondary' | 'muted' | 'destructive'"
  }
};
