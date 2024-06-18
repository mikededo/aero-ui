<script lang="ts">
    import { Loader2 } from 'lucide-svelte';
    import { slide } from 'svelte/transition';
    import { twMerge } from 'tailwind-merge';

    import { Button } from '../button/index.js';
    import type { ButtonProps } from '../button/index.js';

    type Props = ButtonProps & {
        loaderProps?: Loader2['$$prop_def'];
        loading?: boolean;
        loadingSize?: 'small' | 'default' | 'large';
    };

    let {
        loading,
        loadingSize = 'default',
        loaderProps,
        disabled,
        children,
        ...props
    }: Props = $props();
    let iconClasses = $derived(
        twMerge(
            'animate-spin',
            loadingSize === 'small' && 'size-4',
            loadingSize === 'default' && 'size-5',
            loadingSize === 'large' && 'size-6'
        )
    );
</script>

<Button {...props} disabled={disabled || loading}>
    <span class="flex items-center justify-center">
        {#if loading}
            <span transition:slide={{ axis: 'x' }} class="mr-2">
                <Loader2 {...loaderProps} class={iconClasses} />
            </span>
        {/if}
        {#if children}
            {@render children()}
        {/if}
    </span>
</Button>
