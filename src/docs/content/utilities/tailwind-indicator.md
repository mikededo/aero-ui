# Tailwind indicator

Small element that shows the current tailwind screen size. It is dev mode only and does not make sense to have it in production. The component uses only CSS and it does not require JavaScript.

## Usage

In your root layout file:

```svelte title="+layout.svelte"
<script>
  import { TailwindIndicator } from '@mikededo/aero-ui';
</script>

<TailwindIndicator />
```
