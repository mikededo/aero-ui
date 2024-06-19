import type { ActionData } from '../index.js';

export const data: ActionData = {
  properties: {
    offset: {
      type: 'Offset',
      required: false,
      description: 'Offset from the top and/or bottom of the viewport'
    },
    root: {
      type: 'IntersectionObserverInit["root"]',
      required: false,
      description:
        'The root element to observe. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root" class="text-info underline" target="_blank">MDN</a> for more information.',
      descriptionAsHTML: true
    }
  },
  returns: {
    enter: {
      type: '() => void',
      required: true,
      description: 'Callback to be triggered when the node enters the viewport'
    },
    exit: {
      type: '() => void',
      required: true,
      description: 'Callback to be triggered when the node exits the viewport'
    }
  }
};
