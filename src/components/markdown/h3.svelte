<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLHeadingElement>;
    let { ...props }: Props = $props();
</script>

<h3 class={twMerge(props.class, 'mb-3 mt-6 border-b pb-2 dark:border-b-secondary-800')} {...props}>
    {#if props.children}
        {@render props.children()}
    {/if}
</h3>
