import type { ComponentData } from '$docs/data/index.js';

export const data: ComponentData = {
  base: 'HTMLInputAttributes',
  properties: {
    invalid: {
      type: 'boolean',
      required: false,
      description: 'If true, applies destructive styles'
    },
    label: {
      type: 'string',
      required: false,
      description:
        'The label for the input. In form specific inputs, the name of the input will also be forwarded to the label, if any'
    },
    containerClasses: {
      type: 'string',
      required: false,
      description: 'Additional classes for the container, only if label is present'
    },
    labelClasses: {
      type: 'string',
      required: false,
      description: 'Additional classes for the label, only if label is present'
    }
  }
};
