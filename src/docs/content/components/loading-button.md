# Loading button

The loading button is a button that displays a loading spinner when the `loading` prop is set to `true`. It can be used as a button or an anchor. Under the hood, it uses the [`Button`](/docs/components/button) component.

When the `loading` prop is set to `true`, the button will have a `disabled` state and will not respond to clicks. The loading spinner will be displayed instead.

<script>
  import { Preview } from '$components';
  import { LoadingButton } from '$lib/components/loading-button';

  export let data;
</script>

## Preview

<Preview {data} multiple>

<LoadingButton loadingSize="small" variant="condensed" loading>
Condensed
</LoadingButton>
<LoadingButton loading>
Default
</LoadingButton>
<LoadingButton loadingSize="expanded" variant="expanded" loading>
Expanded
</LoadingButton>

</Preview>

## Usage

You can refer to the [`Button`](/docs/components/button) component for more information on how to use the button component.

```svelte
<script lang="ts">
  import { LoadingButton } from '@mikededo/aero-ui';

  let loading = $state(false);

  const handleOnLoad = () => {
    loading = true;
    // Asynchronously action
    loading = false;
  };
</script>

<div class="flex items-center gap-2">
  <LoadingButton {loading} on:click={handleOnLoad}>Loading button</LoadingButton>
</div>
```
