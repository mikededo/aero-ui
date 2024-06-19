<script lang="ts">
    import type { Snippet } from 'svelte';

    import type { ActionData } from '$docs/data/index.js';

    import Properties from './properties.svelte';
    import Types from './types.svelte';

    type Props = { children?: Snippet; data: ActionData; multiple?: boolean };
    let { children, data, multiple = false }: Props = $props();
    let { properties, returns, types } = data;

    let multipleClasses = $derived(multiple ? 'flex gap-4 flex-wrap' : '');
</script>

<div class="w-full overflow-hidden rounded-lg border border-primary-100">
    {#if children}
        <div class="flex h-[200px] items-center justify-center p-6 {multipleClasses}">
            {@render children()}
        </div>
    {/if}

    <div class="flex w-full flex-col">
        {#if properties}
            <Properties {properties} />
        {/if}
        {#if returns}
            <Properties hasBase={!properties} properties={returns} />
        {/if}
        {#if types}
            <Types {types} />
        {/if}
    </div>
</div>
