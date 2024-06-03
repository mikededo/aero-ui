<script lang="ts">
    import type { PageData } from './$types.js';

    type Props = { data: PageData };
    let { data }: Props = $props();
</script>

<h1>
    {data.component[0].toUpperCase()}{data.component.slice(1).replaceAll('-', ' ')}
</h1>
