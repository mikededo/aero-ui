<script lang="ts">
    import '../fonts.css';
    import '../globals.css';

    import type { Snippet } from 'svelte';

    type Props = { children: Snippet };
    let { children }: Props = $props();
</script>

{@render children()}
