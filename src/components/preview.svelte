<script lang="ts">
    import type { Snippet } from 'svelte';

    import type { ComponentData } from '$docs/data/index.js';

    type Props = { children?: Snippet; data: ComponentData; multiple?: boolean };
    let { children, data, multiple = false }: Props = $props();
    let { base, properties, types } = data;

    let multipleClasses = $derived(multiple ? 'flex gap-4 flex-wrap' : '');
</script>

<div class="w-full overflow-hidden rounded-lg border border-primary-100">
    {#if children}
        <div class="flex h-[200px] items-center justify-center p-6 {multipleClasses}">
            {@render children()}
        </div>
    {/if}

    <div class="flex w-full flex-col">
        {#if base}
            <div
                class="flex items-center gap-2 border-primary-100 px-3 py-1.5 text-sm"
                class:border-t={!!children}
            >
                <span class="flex-1">Extends base props from:</span>
                <span class="rounded-md bg-secondary-100 px-2 py-0.5 font-mono">
                    {base}
                </span>
            </div>
        {/if}
        <div
            class="flex items-center gap-2 border-b border-primary-100 bg-primary-100/50 px-3 py-2 font-mono text-xs"
            class:border-b={!!base}
        >
            <span class="flex-1 font-sans">Name</span>
            <span class="w-1/5 text-right">Type</span>
            <span class="w-1/5 text-right">Default</span>
        </div>
        {#each Object.entries(properties) as [key, value]}
            <div
                class="flex items-center gap-2 border-b border-primary-100 px-3 py-1.5 font-mono text-sm last:border-b-0"
            >
                <div class="flex flex-1 flex-col">
                    <span>{key}{value.required ? '*' : ''}</span>
                    <span class="max-w-[65%] font-sans text-xs italic">
                        {#if value.descriptionAsHTML}
                            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                            {@html value.description}
                        {:else}
                            {value.description}{/if}</span
                    >
                </div>
                <div class="text-right">
                    <span class="rounded-md bg-secondary-100 px-2 py-0.5">
                        {value.type}
                    </span>
                </div>
                <div class="w-1/5 text-right">
                    <span class="rounded-md bg-secondary-100 px-2 py-0.5">
                        {value.default ?? '-'}</span
                    >
                </div>
            </div>
        {/each}
        {#if types}
            <div
                class="flex items-center gap-2 border-b border-primary-100 bg-primary-100/50 px-3 py-2 font-mono text-xs"
            >
                <span class="flex-1 font-sans">Type</span>
                <span class="w-1/5 text-right">Value(s)</span>
            </div>
            {#each Object.entries(types) as [key, value]}
                <div
                    class="flex items-center justify-between border-b border-primary-100 px-3 py-1.5 font-mono text-sm last:border-b-0"
                >
                    <span>
                        {key}
                    </span>
                    <span class="rounded-md bg-secondary-100 px-2 py-0.5 text-right">
                        {value}
                    </span>
                </div>
            {/each}
        {/if}
    </div>
</div>
