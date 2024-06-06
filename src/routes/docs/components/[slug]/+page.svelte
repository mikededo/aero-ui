<script lang="ts">
    import type { SvelteComponent } from 'svelte';

    import { Routes } from '$config/index.js';

    import type { PageData } from './$types.js';

    type Props = { data: PageData };
    let { data }: Props = $props();
    let { doc, properties, navigation } = $derived(data);

    const componentName = (name: string) =>
        `${name.charAt(0).toUpperCase()}${name.slice(1)}`.replace(/-/g, ' ');
</script>

<svelte:component this={doc.default as unknown as typeof SvelteComponent} data={properties} />

{#snippet item(component, next)}
    <div class="h-16 w-36" class:ml-auto={next} class:text-right={next}>
        <p class="text-sm text-secondary-500">{next ? 'Next' : 'Previous'}</p>
        <a href="${Routes.components}{component}" class="text-lg text-info">
            {componentName(component)}
        </a>
    </div>
{/snippet}

<div class="mt-auto flex w-full justify-between">
    {#if navigation.prev}
        {@render item(navigation.prev, false)}
    {/if}
    {#if navigation.next}
        {@render item(navigation.next, true)}
    {/if}
</div>
