<script lang="ts">
    import type { AnyMeltElement } from '@melt-ui/svelte';
    import { emptyMeltElement, melt } from '@melt-ui/svelte';
    import type { IconProps, Icon as LucideIcon } from 'lucide-svelte';
    import type { ComponentType } from 'svelte';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
    import { twMerge } from 'tailwind-merge';

    type IconButtonColor = 'primary' | 'secondary' | 'muted' | 'destructive';
    type IconButtonSizes = 'small' | 'default' | 'large';
    type BaseProps = {
        Icon: ComponentType<LucideIcon>;
        size?: IconButtonSizes;
        color?: IconButtonColor;
        href?: string;
        strokeWidth?: IconProps['strokeWidth'];
        meltElement?: AnyMeltElement;
    };
    type Props = BaseProps &
        ((HTMLAnchorAttributes & { href: string }) | (HTMLButtonAttributes & { href?: never }));

    let {
        Icon,
        size = 'default',
        color = 'primary',
        href,
        strokeWidth,
        meltElement,
        ...restProps
    }: Props = $props();

    const iconWrapperClasses =
        'flex items-center justify-center rounded-full hover:bg-muted transition-colors cursor-pointer';
    const iconProps = { strokeWidth };
    const iconSizes: Record<IconButtonSizes, string> = {
        small: 'w-4 h-5',
        default: 'w-5 h-5',
        large: 'w-6 h-6'
    };
    const iconWrapperSizes: Record<IconButtonSizes, string> = {
        small: 'size-6',
        default: 'size-8',
        large: 'size-10'
    };
    const colors: Record<IconButtonColor, string> = {
        primary:
            'bg-primary dark:bg-primary-800 hover:bg-primary/90 hover:dark:bg-primary-800/90 stroke-white',
        secondary:
            'bg-secondary dark:bg-secondary-900 stroke-secondary-foreground hover:bg-secondary/80 dark:hover:bg-secondary-900/90 border border-transparent hover:border-secondary-300 dark:hover:border-secondary-700',
        muted: 'bg-transparent hover:bg-secondary stroke-secondary-foreground',
        destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90 stroke-destructive stroke-white'
    };
    let element = $derived(meltElement ?? emptyMeltElement);
</script>

{#if 'href' in restProps}
    <a
        {...restProps as HTMLAnchorAttributes}
        class={twMerge(iconWrapperClasses, iconWrapperSizes[size], colors[color], restProps.class)}
        {href}
        use:melt={$element}
    >
        <svelte:component
            this={Icon}
            class={twMerge(iconSizes[size], 'stroke-inherit')}
            {...iconProps}
        />
    </a>
{:else}
    <button
        {...restProps as HTMLButtonAttributes}
        class={twMerge(iconWrapperClasses, iconWrapperSizes[size], colors[color], restProps.class)}
        use:melt={$element}
    >
        <svelte:component
            this={Icon}
            class={twMerge(iconSizes[size], 'stroke-inherit')}
            {...iconProps}
        />
    </button>
{/if}
