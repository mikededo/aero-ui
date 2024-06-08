# Icon button

The icon button component is used to trigger an action or event when clicked. It can be used to submit a form, navigate to a different page, or to trigger a function. In order to differentiate between an `anchor` element or a `button` element, the `href` is used.

The component also supports being a melt element, meaning that it can also be used with any kind of builders. An example would be how is used with the [`Menu`](/docs/components/menu) component.

<script>
  import { SaveIcon } from 'lucide-svelte';
  import { Preview } from '$components';
  import { IconButton } from '$lib/components/icon-button';

  export let data;
</script>

## Preview

<Preview {data} multiple>

<div class="flex gap-2 w-full justify-center">
<IconButton Icon={SaveIcon} />
<IconButton Icon={SaveIcon} color="secondary" />
<IconButton Icon={SaveIcon} color="muted" />
<IconButton Icon={SaveIcon} color="destructive" />
</div>

<div class="flex gap-2 w-full justify-center items-center">
<IconButton Icon={SaveIcon} size="small" />
<IconButton Icon={SaveIcon}  />
<IconButton Icon={SaveIcon} size="large" />
</div>
</Preview>

## Usage

### As a button

Simply import the component and use it in your app, without the `href` property.

```svelte
<script lang="ts">
  import { SaveIcon } from 'lucide-svelte';
  import { IconButton } from '@mikededo/aero-ui';

  const handleOnClick = () => {
    // ...
  };
</script>

<IconButton Icon={SaveIcon} onclick={handleOnClick} />
```

### As an anchor

Simply import the component and use it in your app, with the `href` property. If used in SvelteKit, internal links are also supported.

```svelte
<script lang="ts">
  import { ExternalLinkIcon } from 'lucide-svelte';
  import { IconButton } from '@mikededo/aero-ui';
</script>

<IconButton Icon={ExternalLinkIcon} href="https://github.com" />
```
