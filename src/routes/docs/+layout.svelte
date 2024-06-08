<script lang="ts">
    import { RabbitIcon } from 'lucide-svelte';
    import type { Snippet } from 'svelte';

    import { dev } from '$app/environment';
    import { page } from '$app/stores';
    import { DesktopNav, MobileNav, TOC } from '$components/index.js';
    import { JSIndicator, TailwindIndicator } from '$lib/index.js';

    type Props = { children: Snippet };
    let { children }: Props = $props();
</script>

<header class="flex h-topbar w-full items-center gap-2 border-b px-4 md:px-6">
    <RabbitIcon />
    <p class="text-xl font-semibold">Aero UI</p>
</header>

<main class="flex overflow-hidden">
    {#if !$page.error}
        <DesktopNav />
        <MobileNav />

        <!-- Independent content  -->
        <div class="content-wrapper h-full-topbar w-full overflow-y-auto" id="toc">
            <div
                class="mx-auto h-fit min-h-full-topbar w-full max-w-[880px] px-8 py-6 md:px-10 lg:px-12 lg:py-12"
            >
                {@render children()}
            </div>
        </div>

        <TOC />
    {:else}
        {@render children()}
    {/if}
</main>

{#if dev}
    <TailwindIndicator />
    <JSIndicator />
{/if}

<style>
    /* From radix-ui: https://github.com/radix-ui/website/blob/52578d3c5956b26c117ad8328ee40ecc6170b648/components/DocsPageWrapper.module.css */
    .content-wrapper {
        flex-grow: 1;
        display: flex;
        max-width: 100%;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        .content-wrapper {
            margin-left: calc((1024px - 100vw) * 0.25);
        }
    }

    @media (min-width: 1440px) {
        .content-wrapper {
            margin-left: calc(-104px + (100vw - 1440px) * 0.52 - (100vw - 1440px) * 1.25);
        }
    }

    @media (min-width: 1640px) {
        .content-wrapper {
            margin-left: -200px;
        }
    }
</style>
