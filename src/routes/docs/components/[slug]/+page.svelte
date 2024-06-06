<script lang="ts">
    import type { SvelteComponent } from 'svelte';

    import type { PageData } from './$types.js';

    type Props = { data: PageData };
    let { data }: Props = $props();
    let { doc, properties } = data;
</script>

<svelte:component this={doc.default as unknown as typeof SvelteComponent} data={properties} />
