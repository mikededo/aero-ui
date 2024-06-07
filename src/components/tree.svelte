<script lang="ts">
    import type { TableOfContentsElements, TableOfContentsItem } from '@melt-ui/svelte';

    type Props = {
        activeHeadingIdxs: number[];
        item: TableOfContentsElements['item'];
        tree: TableOfContentsItem[];
        level?: number;
    };
    let { tree = [], activeHeadingIdxs, item, level = 1 }: Props = $props();
</script>

<ul class="list-none {level !== 1 ? 'pl-4' : ''}">
    {#if tree && tree.length}
        {#each tree as heading, i (i)}
            <li class="mt-0 pt-2">
                <a
                    href="#{heading.id}"
                    {...$item(heading.id)}
                    use:item
                    class="text-sm hover:text-primary hover:underline"
                >
                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                    {@html heading.node.innerHTML}
                </a>
                {#if heading.children && heading.children.length}
                    <svelte:self
                        tree={heading.children}
                        level={level + 1}
                        {activeHeadingIdxs}
                        {item}
                    />
                {/if}
            </li>
        {/each}
    {/if}
</ul>
