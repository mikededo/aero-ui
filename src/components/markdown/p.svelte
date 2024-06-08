<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLParagraphElement>;
    let { ...props }: Props = $props();
</script>

<p {...props} class={twMerge('my-3', props.class)}>
    {#if props.children}
        {@render props.children()}
    {/if}
</p>
