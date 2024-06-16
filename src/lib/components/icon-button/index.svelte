<script lang="ts">
    import { emptyMeltElement, melt } from '@melt-ui/svelte';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

    import { getIconClasses, getWrapperClasses } from './styles.js';
    import type { BaseProps } from './styles.js';

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

    const iconProps = { strokeWidth };
    let wrapperClasses = $derived(getWrapperClasses({ size, color }));
    let iconClasses = $derived(getIconClasses({ size }));
    let element = $derived(meltElement ?? emptyMeltElement);
</script>

{#if 'href' in restProps}
    <a {...restProps as HTMLAnchorAttributes} class={wrapperClasses} {href} use:melt={$element}>
        <svelte:component this={Icon} class={iconClasses} {...iconProps} />
    </a>
{:else}
    <button {...restProps as HTMLButtonAttributes} class={wrapperClasses} use:melt={$element}>
        <svelte:component this={Icon} class={iconClasses} {...iconProps} />
    </button>
{/if}
