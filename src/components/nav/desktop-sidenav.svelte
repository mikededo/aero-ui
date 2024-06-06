<script lang="ts">
    import { page } from '$app/stores';

    import { navigation } from './navigation.js';
</script>

<nav
    class="z-10 hidden h-full-topbar max-w-xs flex-col gap-4 overflow-y-auto border-r px-2 py-4 text-sm md:px-4 lg:flex"
>
    <input class="w-full rounded-full bg-gray-100 px-4 py-2" placeholder="Search" />
    {#each navigation as { title, items }}
        <div class="flex w-full flex-col gap-[1px]">
            <p class="p-2 px-4 font-medium">{title}</p>
            {#each items as { title, path }}
                <a
                    href={path}
                    class="w-full rounded-full p-2 px-4 transition-colors"
                    class:hover:bg-secondary-100={$page.url.pathname !== path}
                    class:bg-primary-50={$page.url.pathname === path}
                >
                    {title}
                </a>
            {/each}
        </div>
    {/each}
</nav>
