<script lang="ts">
    import type { Snippet } from 'svelte';

    import type { ComponentData } from '$docs/index.js';

    type Props = { children: Snippet; data: ComponentData };
    let { children, data }: Props = $props();
    let { base, properties } = data;
</script>

<div class=" w-full rounded-lg border border-primary-100">
    <div class="flex h-[200px] items-center p-6">
        {@render children()}
    </div>
    <div class="flex w-full flex-col">
        {#if base}
            <div class="flex items-center gap-2 border-t border-primary-100 px-3 py-1.5 text-sm">
                <span class="flex-1">Extends base props from:</span>
                <span class="rounded-md bg-secondary-100 px-2 py-0.5 font-mono">
                    {base}
                </span>
            </div>
        {/if}
        <div
            class="flex items-center gap-2 border-y border-primary-100 bg-primary-100/50 px-3 py-2 font-mono text-xs"
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
                    <span class="font-sans text-xs italic">{value.description}</span>
                </div>
                <div class="w-1/5 text-right">
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
    </div>
</div>
