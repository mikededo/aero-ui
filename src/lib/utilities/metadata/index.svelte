<script lang="ts">
    import type { Metadata } from './types.js';

    type Props = { metadata: Partial<Metadata> };

    let { metadata }: Props = $props();
</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <link rel="canonical" href={metadata.canonical} />
    <meta property="locale" content={metadata.locale} />

    {#if metadata.alternates}
        {#each Object.entries(metadata.alternates) as [hreflang, href] (hreflang)}
            <link rel="alternate" {hreflang} {href} />
        {/each}
    {/if}

    <!-- Open Graph -->
    {#if metadata.og}
        <meta property="og:title" content={metadata.og.title ?? metadata.title} />
        <meta property="og:description" content={metadata.og.description ?? metadata.title} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:type" content={metadata.og.type} />
    {/if}

    <!-- Twitter -->
    {#if metadata.twitter}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metadata.og?.image} />
    {:else}
        <meta name="twitter:title" content={metadata.og?.title ?? metadata.title} />
        <meta
            name="twitter:description"
            content={metadata.og?.description ?? metadata.description}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metadata.og?.image} />
    {/if}
</svelte:head>
