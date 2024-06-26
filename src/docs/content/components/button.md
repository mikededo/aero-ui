# Button

The button component is used to trigger an action or event when clicked. It can be used to submit a form, navigate to a different page, or to trigger a function. In order to differentiate between an `anchor` element or a `button` element, the `href` is used.

<script>
  import { ComponentPreview } from '$components';
  import { Button } from '$lib/components/button';

  export let data;
</script>

## Preview

<ComponentPreview {data}>

<div class="flex flex-col gap-4 items-center">
<div class="flex flex-row gap-2">
<Button>
Submit
</Button>
<Button color="secondary">
Secondary
</Button>
<Button color="muted">
Muted
</Button>
<Button color="destructive">
Destructive
</Button>
</div>

<div class="flex flex-row gap-2 items-center">
<Button variant="condensed">
Condensed
</Button>
<Button>
Default
</Button>
<Button variant="expanded">
Expanded
</Button>
</div>
</div>

</ComponentPreview>

## Usage

### As a button

Simply import the component and use it in your app, without the `href` property.

```svelte
<script lang="ts">
  import { Button } from '@mikededo/aero-ui';

  const handleOnClick = () => {
    // ...
  };
</script>

<div class="flex items-center gap-2">
  <Button onclick={handleOnClick}>Confirm</Button>
  <Button color="secondary">Cancel</Button>
</div>
```

### As an anchor

Simply import the component and use it in your app, with the `href` property. If used in SvelteKit, internal links are also supported.

```svelte
<script lang="ts">
  import { Button } from '@mikededo/aero-ui';
</script>

<Button href="/home">Go back</Button>
```
