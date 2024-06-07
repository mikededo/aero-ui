<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = { children: Snippet };
    let { children }: Props = $props();
</script>

<div class="flex h-full flex-col justify-between gap-4">
    {@render children()}
</div>
