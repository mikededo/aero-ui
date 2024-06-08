# JS Indicator

Small element that shows the user that JavaScript is enabled in the browser. It is dev mode only and does not make sense to have it in production. The component uses Svelte Kit `browser` store to check if JavaScript is enabled.

## Usage

In your root layout file:

```svelte title="+layout.svelte"
<script>
  import { JSIndicator } from '@mikededo/aero-ui';
</script>

<JSIndicator />
```
