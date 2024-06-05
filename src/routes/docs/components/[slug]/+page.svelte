<script lang="ts">
    import type { SvelteComponent } from 'svelte';

    import type { PageData } from './$types.js';

    type Props = { data: PageData };
    let { data }: Props = $props();
</script>

<svelte:component this={data.default as unknown as typeof SvelteComponent} />
