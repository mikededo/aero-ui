<script lang="ts">
    import { twMerge } from 'tailwind-merge';

    import { page } from '$app/stores';
    import { Input } from '$lib/components/index.js';

    import { navigation } from './navigation.js';
</script>

<nav
    class="z-10 hidden h-full-topbar max-w-xs shrink-0 flex-col gap-4 overflow-y-auto border-r px-2 py-4 text-sm dark:border-r-secondary-800 md:px-4 lg:flex 2xl:w-[250px]"
>
    <Input class="w-full rounded-full" placeholder="Search" />
    {#each navigation as { title, items }}
        <div class="flex w-full flex-col gap-[1px]">
            <p class="p-2 px-4 font-medium">{title}</p>
            {#each items as { title, path }}
                <a
                    href={path}
                    class={twMerge(
                        'w-full rounded-full p-2 px-4 transition-colors',
                        $page.url.pathname !== path &&
                            'hover:bg-secondary-100 dark:hover:bg-secondary-900',
                        $page.url.pathname === path && 'bg-primary-50 dark:bg-primary-700'
                    )}
                >
                    {title}
                </a>
            {/each}
        </div>
    {/each}
</nav>
