<script lang="ts">
    import { CheckCircle2, Circle, XCircleIcon } from 'lucide-svelte';
    import { scale } from 'svelte/transition';
    import { twMerge } from 'tailwind-merge';

    type Props = {
        disabled?: boolean;
        invalid?: boolean;
        label: string;
        value?: boolean;
    };
    let { value = $bindable<boolean>(false), label, invalid, disabled }: Props = $props();

    const ANIMATION_DURATION = 100;

    const accLabel = label.toLowerCase().replace(/\s/g, '-');
    const baseClasses =
        'size-4 transition-all group-focus:ring-2 group-focus:ring-primary group-active:ring-2 group-active:ring-primary rounded-full';
    const invalidClasses = twMerge(
        baseClasses,
        'text-destructive group-focus:ring-destructive group-active:ring-destructive'
    );

    const handleOnClick = () => {
        value = !value;
    };
</script>

<button
    role="checkbox"
    aria-checked={value}
    aria-labelledby={accLabel}
    class="group flex items-center gap-2 outline-none disabled:cursor-not-allowed disabled:text-secondary-500"
    {disabled}
    onclick={handleOnClick}
>
    {#if value && !invalid}
        <div in:scale={{ duration: ANIMATION_DURATION }}>
            <CheckCircle2 class={twMerge('text-primary', baseClasses)} />
        </div>
    {:else if value && invalid}
        <div in:scale={{ duration: ANIMATION_DURATION }}>
            <XCircleIcon class={invalidClasses} />
        </div>
    {:else}
        <div in:scale={{ duration: ANIMATION_DURATION }}>
            <Circle class={twMerge(baseClasses, invalid && invalidClasses)} />
        </div>
    {/if}
    <span id={accLabel} class="text-sm" class:text-destructive={invalid}>
        {label}
    </span>
</button>
