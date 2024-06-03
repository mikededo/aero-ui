<script lang="ts">
    import type { Snippet } from 'svelte';

    import { dev } from '$app/environment';
    import { DesktopNav, JSIndicator, MobileNav, TailwindIndicator } from '$components/index.js';

    type Props = { children: Snippet };
    let { children }: Props = $props();
</script>

<header class="flex h-12 w-full items-center border-b px-4 md:px-6">
    <p class="text-lg font-semibold">Aero UI</p>
</header>

<main class="overflow-hidden">
    <DesktopNav />
    <MobileNav />

    <!-- Independent content  -->
    <div class="fixed inset-0 top-12 lg:left-80 xl:left-60 2xl:left-0">
        <div class="mx-auto h-[calc(100vh-48px)] max-w-[880px]">
            {@render children()}
        </div>
    </div>
</main>

{#if dev}
    <TailwindIndicator />
    <JSIndicator />
{/if}
