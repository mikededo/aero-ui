<script lang="ts">
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    type Props = { children: Snippet; class?: string };
    let { children, ...restProps }: Props = $props();
</script>

<div
    class={twMerge(
        'flex items-center gap-2 border-b border-primary-100 bg-primary-100/50 px-3 py-2 font-mono text-xs dark:border-secondary-800 dark:bg-primary/40',
        restProps.class
    )}
>
    {@render children()}
</div>
