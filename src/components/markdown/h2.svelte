<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLHeadingElement>;
    let { ...props }: Props = $props();
</script>

<h2 class={twMerge(props.class, 'mt-8')} {...props}>
    {#if props.children}
        {@render props.children()}
    {/if}
</h2>
