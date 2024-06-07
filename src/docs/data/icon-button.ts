import type { ComponentData } from '../index.js';

export const data: ComponentData = {
  base: 'HTMLButtonAttributes | HTMLAnchorAttributes',
  properties: {
    Icon: {
      type: 'ComponentType<LucideIcon>',
      required: true,
      description:
        'The icon to display. LucideIcon is an alias for the <a href="https://github.com/lucide-icons/lucide/blob/main/packages/lucide-svelte/src/types.ts#L24" rel="noopener noreferrer" target="_blank" class="hover:underline text-primary">Lucide Icon type</a>',
      descriptionAsHTML: true
    },
    color: {
      type: 'IconButtonColor',
      required: false,
      default: "'primary'",
      description: 'The color of the icon button'
    },
    size: {
      type: 'IconButtonSize',
      required: false,
      default: "'default'",
      description: 'The size of the icon button'
    },
    href: {
      type: 'string',
      required: false,
      description:
        'The URL to navigate to when the button is clicked. It will use an anchor as an element for the component'
    },
    strokeWidth: {
      type: "IconProps['strokeWidth']",
      required: false,
      description: 'Forwarded "strokeWidth" prop of the Lucide icon'
    },
    meltElement: {
      type: 'AnyMeltElement',
      required: false,
      default: 'emptyMeltElement',
      description: 'Optional melt builder element to forward to the root element as an action'
    }
  },
  types: {
    IconButtonSize: "'small' | 'default' | 'large'",
    IconButtonColor: "'primary' | 'secondary' | 'muted' | 'destructive'"
  }
};
