<script lang="ts">
    import type { Properties } from '$docs/data/index.js';

    type Props = { types: Record<string, string> };
    let { types }: Props = $props();
</script>

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
