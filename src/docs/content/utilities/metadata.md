# Metadata

The metadata utility is a simple utility that allows you to add metadata to the pages. It simplifies the process of adding metadata to Svelte Kit pages.

<script>
  import { Preview } from '$components';

  export let data;
</script>

## API

<Preview {data} />

## Usage

A common approach for using this component, is that you load your metadata in
your `+layout[.server].ts` or `+page[.server].ts` files and you use them in the
respective `svelte` files.

```typescript title="+layout.server.ts"
import type { Metadata } from '@mikededo/aero-ui';

import type { LayoutServerLoad } from './$types';

// For a route like /products/:id
export const load: LayoutServrLoad = async ({ params, url }) => {
  const { id } = params;

  // Fetch your product
  const { name, description, image_url } = await fetch(`/api/products/${id}`);

  return {
    metadata: {
      title: '{name} - SvelteShop',
      description,
      og: {
        title: '{name} - SvelteShop',
        description,
        image: image_url,
        siteName: url.pathname,
        type: 'website'
      }
    } satisfies Metadata
  };
};
```

Then, in your `+layout.svelte` file:

```svelte title="+layout.svelte"
<script lang="ts">
  import { Metadata, Meta } from '@mikededo/aero-ui';
  import type { Snippte } from 'svelte';

  type Props = { data: { metadata: Metadata }, children: Snippet };
  let { data, children }: Props = $props();
</script>

<Meta {data.metadata} />
{@render children()}
```

### Templating

To be defined :)
