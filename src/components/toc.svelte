<script lang="ts">
    import { createTableOfContents } from '@melt-ui/svelte';

    import Tree from './tree.svelte';

    const {
        elements: { item },
        states: { activeHeadingIdxs, headingsTree }
    } = createTableOfContents({
        selector: '#toc',
        exclude: ['h1', 'h4', 'h5', 'h6'],
        activeType: 'none',
        scrollOffset: 80,
        scrollBehaviour: 'smooth',
        scrollFn: (id) => {
            const container = document.getElementById('toc');
            const element = document.getElementById(id);

            if (container && element) {
                container.scrollTo({
                    top: element.offsetTop - container.offsetTop - 16,
                    behavior: 'smooth'
                });
            }
        }
    });
</script>

{#if $headingsTree?.length}
    <div
        class="fixed right-0 top-12 hidden overflow-y-auto rounded-lg px-8 py-6 lg:py-12 2xl:flex 2xl:min-w-[250px] 2xl:flex-col"
    >
        <p class="font-semibold">Table of contents</p>
        <nav>
            {#key $headingsTree}
                <Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} />
            {/key}
        </nav>
    </div>
{/if}
