<script context="module">
    import './styles.postcss';

    import a from './a.svelte';
    import h2 from './h2.svelte';
    import h3 from './h3.svelte';
    import p from './p.svelte';
    import pre from './pre.svelte';

    export { a, p, pre, h2, h3 };
</script>

<slot />
