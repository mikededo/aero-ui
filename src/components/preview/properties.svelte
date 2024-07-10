<script lang="ts">
    import { AsteriskIcon } from 'lucide-svelte';

    import type { Properties } from '$docs/data/index.js';

    import Chip from './chip.svelte';
    import Header from './header.svelte';

    type Props = { properties: Record<string, Properties>; hasBase?: boolean };
    let { properties, hasBase }: Props = $props();
</script>

{#snippet row(key, value, nested)}
    <div
        class="flex items-center gap-2 border-b border-primary-100 px-3 py-1.5 font-mono text-sm last:border-b-0 dark:border-secondary-800"
        class:pl-8={nested}
    >
        <div class="flex flex-1 flex-col">
            <span class="flex items-center gap-0.5">
                {key}{#if value.required}<AsteriskIcon size={12} class="stroke-destructive" />{/if}
            </span>
            <span class="max-w-[95%] font-sans text-xs italic">
                {#if value.descriptionAsHTML}
                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                    {@html value.description}
                {:else}
                    {value.description}{/if}</span
            >
        </div>
        <div class="text-right">
            <Chip>
                {value.type}
            </Chip>
        </div>
        <div class="w-1/5 text-right">
            <Chip>
                {value.default ?? '-'}
            </Chip>
        </div>
    </div>
{/snippet}

<Header class={!hasBase ? 'border-t' : ''}>
    <span class="flex-1 font-sans">Name</span>
    <span class="w-1/5 text-right">Type</span>
    <span class="w-1/5 text-right">Default</span>
</Header>
{#each Object.entries(properties) as [pKey, pValue] (pKey)}
    {@render row(pKey, pValue, false)}
    {#if pValue.children}
        {#each Object.entries(pValue.children) as [cKey, cValue] (cKey)}
            {@render row(cKey, cValue, true)}
        {/each}
    {/if}
{/each}
