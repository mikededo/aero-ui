<script lang="ts">
    import type { PageData } from './$types.js';

    type Props = { data: PageData };
    let { data }: Props = $props();
</script>

<h1 class="text-3xl font-semibold">
    {data.component[0].toUpperCase()}{data.component.slice(1).replaceAll('-', ' ')}
</h1>
