import type { ComponentData } from '../index.js';

export const data: ComponentData = {
  base: null,
  properties: {
    title: {
      type: 'string',
      description: 'The title of the page. The value will be rendered in a <title> tag.',
      required: true
    },
    description: {
      type: 'string',
      description:
        'The description of the page. The value will be rendered in a <meta name="description"> tag.',
      required: true
    },
    locale: {
      type: 'string',
      description:
        'The locale of the page. The value will be rendered in a <meta property="language"> tag.',
      required: false
    },
    og: {
      type: 'object',
      description: 'Open Graph metadata',
      required: false,
      children: {
        title: {
          type: 'string',
          description:
            'The title of the page. The value will be rendered in a <meta property="og:title"> tag.',
          required: false
        },
        description: {
          type: 'string',
          description:
            'The description of the page. The value will be rendered in a <meta property="og:description"> tag.',
          required: false
        },
        url: {
          type: 'string',
          description:
            'The URL of the page. The value will be rendered in a <meta property="og:url"> tag.',
          required: true
        },
        siteName: {
          type: 'string',
          description:
            'The site name. The value will be rendered in a <meta property="og:site_name"> tag.',
          required: true
        },
        image: {
          type: 'string',
          description:
            'The image URL. The value will be rendered in a <meta property="og:image"> tag.',
          required: true
        },
        type: {
          type: 'string',
          description:
            'The type of the page. The value will be rendered in a <meta property="og:type"> tag.',
          required: true
        }
      }
    },
    twitter: {
      type: 'object',
      description: 'Twitter metadata. If undefined, will use og data.',
      required: false,
      children: {
        title: {
          type: 'string',
          description:
            'The title of the page. The value will be rendered in a <meta property="twitter:title"> tag.',
          required: true
        },
        description: {
          type: 'string',
          description:
            'The description of the page. The value will be rendered in a <meta property="twitter:description"> tag.',
          required: true
        },
        card: {
          type: 'string',
          description:
            'The card type. The value will be rendered in a <meta property="twitter:card"> tag.',
          required: true
        },
        image: {
          type: 'string',
          description:
            'The image URL. The value will be rendered in a <meta property="twitter:image"> tag.',
          required: true
        }
      }
    },
    canonical: {
      type: 'string',
      description:
        'The canonical URL of the page. The value will be rendered in a <link rel="canonical"> tag.',
      required: true
    },
    alternates: {
      type: 'object',
      description: 'Alternate URLs',
      required: false,
      children: {
        '[lang]': {
          type: 'string',
          description: 'Record of langs to URL for each language.',
          required: true
        }
      }
    }
  }
};
