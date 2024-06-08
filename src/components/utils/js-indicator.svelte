<script>
    import { browser } from '$app/environment';
</script>

<div
    class="fixed bottom-1 left-8 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-1 font-mono text-xs text-white"
    data-browser={browser ? '' : undefined}
>
    {browser ? 'js' : 'ssr'}
</div>
