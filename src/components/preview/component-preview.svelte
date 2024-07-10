<script lang="ts">
    import type { Snippet } from 'svelte';

    import type { ComponentData } from '$docs/data/index.js';

    import Chip from './chip.svelte';
    import Properties from './properties.svelte';
    import Types from './types.svelte';

    type Props = { children?: Snippet; data: ComponentData; multiple?: boolean };
    let { children, data, multiple = false }: Props = $props();
    let { base, properties, types } = data;

    let multipleClasses = $derived(multiple ? 'flex gap-4 flex-wrap' : '');
</script>

<div class="w-full overflow-hidden rounded-lg border border-primary-100 dark:border-secondary-800">
    {#if children}
        <div class="flex h-[200px] items-center justify-center p-6 {multipleClasses}">
            {@render children()}
        </div>
    {/if}

    <div class="flex w-full flex-col">
        {#if base}
            <div
                class="flex items-center gap-2 border-primary-100 px-3 py-1.5 text-sm dark:border-secondary-800"
                class:border-t={!!children}
            >
                <span class="flex-1">Extends base props from:</span>
                <Chip>
                    {base}
                </Chip>
            </div>
        {/if}
        <Properties hasBase={!base} {properties} />
        {#if types}
            <Types {types} />
        {/if}
    </div>
</div>
