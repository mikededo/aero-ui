# Input

Text input fields allow users to input text into a field. This is useful for forms, search bars, and other fields where users need to input text.

<script lang="ts">
  import { Preview } from '$components'
  import { Input } from '$lib/components/input';

  export let data;
</script>

## Preview

<Preview {data}>
<Input label="Name" placeholder="John doe" />
</Preview>

## Usage

```svelte
<script lang="ts">
  import { Input } from '@mikededo/aero-ui';
</script>

<Input label="Name" placeholder="John doe" />
```

Input can both be controlled and uncontrolled. This component forwards a value as [`bindable`](https://svelte-5-preview.vercel.app/docs/runes#$bindable) property, with the new Svelte 5 runes syntax. As an alternative, you can simply use it inside a `form` component and retrieve its value from the `FormData`.

If an input is not valid, `required` styles will be applied, even if the `invalid` prop is not forwarded. The idea of having an `invalid` prop is so that you can control the input's validity from the parent component.

```svelte {6} {14}
<script lang="ts">
  import { Input } from '@mikededo/aero-ui';

  let email = $state('');
  // Simple validation
  let validEmail = $derived(name || name === '' ? name.includes('@') : false);
</script>

<form onsubmit={...}>
  <Input
      value={email}
      label="Email"
      placeholder="john.doe@email.com"
      invalid={validEmail}
      required
  />
</form>
```

This way, you can control the input's validity before the input is submitted, as well as extending error handling.

### Label

The label prop is not required. Whenever a `label` is forwarded, two more properties are exposed: `containerClasses` and `labelClasses`. These two optional properties will allow you to append custom styles to the input wrapper and the label. If no `label` is passed, no container is rendered.
