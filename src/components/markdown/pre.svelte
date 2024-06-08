<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    type Props = HTMLAttributes<HTMLPreElement>;
    let { ...props }: Props = $props();
</script>

<pre class={twMerge(props.class, 'my-8 overflow-hidden rounded-lg')} {...props}>
  {#if props.children}
        {@render props.children()}
    {/if}
</pre>
