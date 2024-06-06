<script lang="ts">
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

    import { type SharedButtonProps, sharedClasses } from './styles.js';

    type BaseProps =
        | (HTMLAnchorAttributes & { href: string })
        | (HTMLButtonAttributes & { href?: never });
    type Props = BaseProps & SharedButtonProps;

    let { variant = 'default', color = 'primary', children, ...restProps }: Props = $props();

    const classes = sharedClasses({
        variant,
        color,
        className: restProps.class
    });
</script>

{#if 'href' in restProps}
    <a {...restProps as HTMLAnchorAttributes} href={restProps.href} class={classes}>
        {#if children}
            {@render children()}
        {/if}
    </a>
{:else}
    <button {...restProps} class={classes}>
        {#if children}
            {@render children()}
        {/if}
    </button>
{/if}
