<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = { children: Snippet };
    let { children }: Props = $props();
</script>

<div class="flex flex-col gap-4 px-4 py-12">
    {@render children()}
</div>
