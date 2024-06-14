# Checkbox

The checkbox component is used to allow users to select one or more options from a list. It is commonly used in forms and other settings where users need to make a selection. The current implementation does not allow the `indeterminate` state, and it will most likely not be added in the future (as I have not found a use case for it).

<script>
  import { Preview } from '$components';
  import { Checkbox } from '$lib/components/checkbox';

  export let data;
</script>

## Preview

<Preview {data} multiple>
<Checkbox label="Correct" />
<Checkbox label="Invalid" invalid />
<Checkbox label="Disabled" disabled />
</Preview>

## Usage

Simply import the component and use it in your app.

```svelte
<script lang="ts">
  import { Checkbox } from '@mikededo/aero-ui';
</script>

<div class="flex flex-col gap-4">
  <Checkbox label="Apple" />
  <Checkbox label="Orange" />
  <Checkbox label="Banana" />
  <Checkbox label="Grape" />
</div>
```
