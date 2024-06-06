<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import { slide } from 'svelte/transition';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLDivElement> & {
        children: Snippet;
        destructive?: boolean;
        withTransition?: boolean;
    };

    let { destructive = false, withTransition = false, children, ...restProps }: Props = $props();

    let classes = $derived(
        twMerge(
            'w-full rounded-lg bg-secondary p-2 text-center text-sm',
            destructive && 'bg-destructive/10 text-destructive dark:bg-destructive/75',
            restProps.class
        )
    );
</script>

<div
    {...restProps}
    class={classes}
    transition:slide={{ axis: 'y', duration: withTransition ? 100 : 0 }}
>
    {@render children()}
</div>
