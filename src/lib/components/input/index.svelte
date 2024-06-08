<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';

    import { getContainerClasses, getInputClasses, getLabelClasses } from './helpers.js';

    type Props = HTMLInputAttributes & { invalid?: boolean } & (
            | { label: string; containerClasses?: string; labelClasses?: string }
            | { label?: never; containerClasses?: never; labelClasses?: never }
        );

    let { label, value = $bindable(), name, invalid, ...restProps }: Props = $props();
    let classes = $derived(getInputClasses({ classes: restProps.class, invalid }));
    let containerClasses = $derived(getContainerClasses(restProps.containerClasses ?? ''));
    let labelClasses = $derived(getLabelClasses(restProps.labelClasses ?? ''));
</script>

{#if label}
    <div class={containerClasses}>
        <label for={name} class={labelClasses}>{label}</label>
        <input {...restProps} {name} class={classes} bind:value />
    </div>
{:else}
    <input {...restProps} {name} class={classes} bind:value />
{/if}
