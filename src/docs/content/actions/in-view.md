# In-view action

The `in-view` action is used to trigger a callback when a component is in view. It is useful for triggering animations or other effects when a component is in view.

<script>
import { ActionPreview } from '$components';

export let data;
</script>

## API

Remember that callbacks must be prefixed with `on:` for Svelte 4 and `on` for Svelte 5.

<ActionPreview {data} />

## Usage

```svelte
<script>
  import { inView } from '@mikededo/aero-ui';

  let isInView = $state(false);

  const handleOnEnter = () => {
    isInView = true;
  };

  const handleOnExit = () => {
    isInView = false;
  };
</script>

<!-- Using Svelte 5 syntax -->
<div use:inView onenter={handleOnEnter} onexit={handleOnExit}>
  <!-- Component to be in view -->
</div>

{#if isInView}
  <!-- Anything to be triggered when component is in view -->
{/if}
```
