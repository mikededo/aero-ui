<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    let { children, ...restProps }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span
    {...restProps}
    class={twMerge(
        'rounded-md bg-secondary-100 px-2 py-0.5 font-mono dark:bg-secondary-900',
        restProps.class
    )}
>
    {#if children}
        {@render children()}
    {/if}
</span>
