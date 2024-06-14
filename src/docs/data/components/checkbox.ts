import type { ComponentData } from '../index.js';

export const data: ComponentData = {
  base: null,
  properties: {
    value: {
      type: 'bindable<boolean>',
      required: false,
      default: 'false',
      description: 'The value of the checkbox.'
    },
    label: {
      type: 'string',
      required: false,
      description: 'The label of the checkbox.'
    },
    invalid: {
      type: 'boolean',
      required: false,
      description: 'Whether the checkbox is invalid.'
    },
    disabled: {
      type: 'boolean',
      required: false,
      description: 'Whether the checkbox is disabled.'
    }
  }
};
