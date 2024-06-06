<script lang="ts">
    import { CheckIcon, XIcon } from 'lucide-svelte';

    let sections = [
        {
            title: 'Installation',
            items: [
                { name: 'Usage', complete: false },
                { name: 'Configuration', complete: false }
            ]
        },
        {
            title: 'Theming',
            items: [
                { name: 'Default Theme', complete: false },
                { name: 'Custom Themes', complete: false },
                { name: 'Dark Mode', complete: false }
            ]
        },
        {
            title: 'Tokens',
            items: [
                { name: 'Color Tokens', complete: false },
                { name: 'Spacing Tokens', complete: false },
                { name: 'Typography Tokens', complete: false }
            ]
        },
        {
            title: 'Typography',
            items: [
                { name: 'Fonts', complete: false },
                { name: 'Text Styles', complete: false }
            ]
        },
        {
            title: 'Components',
            items: [
                { name: 'Accordion', complete: false },
                { name: 'Alert', complete: false },
                { name: 'Badge', complete: false },
                { name: 'Breadcrumb', complete: false },
                { name: 'Button', complete: false },
                { name: 'Card', complete: false },
                { name: 'Chip', complete: false },
                { name: 'Carousel', complete: false },
                { name: 'Checkbox', complete: false },
                { name: 'Dropdown', complete: false },
                { name: 'Input', complete: false },
                { name: 'Modal', complete: false },
                { name: 'Navbar', complete: false },
                { name: 'Pagination', complete: false },
                { name: 'Progress Bar', complete: false },
                { name: 'Radio button', complete: false },
                { name: 'Sidebar', complete: false },
                { name: 'Slider', complete: false },
                { name: 'Spinner', complete: false },
                { name: 'Switch', complete: false },
                { name: 'Table', complete: false },
                { name: 'Tabs', complete: false },
                { name: 'Toast Notification', complete: false },
                { name: 'Tooltip', complete: false }
            ]
        },
        {
            title: 'Others',
            items: [{ name: 'Pagefind', complete: false }]
        }
    ];
</script>

<h1 class="mb-6 text-3xl font-bold">Roadmap</h1>
<div class="flex flex-col gap-4">
    {#each sections as section}
        <div class="flex flex-col">
            <p class="font-semibold">{section.title}</p>
            <ul>
                {#each section.items as item}
                    <li class="ml-4 flex items-center gap-1">
                        {#if item.complete}
                            <CheckIcon class="ml-2 h-5 w-5 text-positive" />
                        {:else}
                            <XIcon class="ml-2 h-5 w-5 text-destructive" />
                        {/if}
                        <p>{item.name}</p>
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
</div>
