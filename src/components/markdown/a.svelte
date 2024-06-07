<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    let { ...props }: HTMLAnchorAttributes = $props();
</script>

<a {...props} class={twMerge('text-primary hover:underline', props.class)}>
    {#if props.children}{@render props.children()}{/if}
</a>
