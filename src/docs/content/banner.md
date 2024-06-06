# Banner

<script>
  import { Preview } from '$components';
  import { Banner } from '$lib/components/banner';

  export let data;
</script>

The banner is used to display information to the user. It can be used to display
important information or to show a message to the user.

## Preview

<Preview {data}>
<Banner>
This is the content of the banner
</Banner>
</Preview>

### Usage

Simply import the component and use it in your app.

```svelte
<script lang="ts">
  import { Banner } from '@mikededo/aero-ui';
</script>

<Banner>This is the content of the banner</Banner>
```
