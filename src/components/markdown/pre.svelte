<script lang="ts">
    import { twMerge } from 'tailwind-merge';
</script>

<pre class={twMerge($$restProps.class, 'code-pre overflow-hidden rounded-lg')} {...$$restProps}>
    <slot />
</pre>
