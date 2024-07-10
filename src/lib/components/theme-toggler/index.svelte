<script lang="ts" context="module">
    export type Theme = 'system' | 'light' | 'dark';
</script>

<script lang="ts">
    import { Moon, Sun } from 'lucide-svelte';

    import { browser } from '$app/environment';

    import { IconButton } from '../icon-button/index.js';

    type WithSystemProps = { withSystem: true; initialTheme?: Theme };
    type WithoutSystemProps = { withSystem?: never; initialTheme?: Exclude<Theme, 'system'> };
    type Props = {
        onThemeChange?: (theme: Theme) => void;
    } & (WithSystemProps | WithoutSystemProps);

    let { initialTheme, onThemeChange, withSystem }: Props = $props();
    let theme = $state<Theme>(initialTheme ?? withSystem ? 'system' : 'light');

    const handleOnChange = (newTheme?: Theme) => {
        if (!browser) {
            // Just in case
            return;
        }
        const { classList } = document.documentElement;

        if (withSystem) {
            classList.remove('light', 'dark', 'system');
            classList.add(newTheme ?? 'system');
        } else {
            const isDark = classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';

            theme = newTheme;
            classList.add(newTheme);
            classList.remove(isDark ? 'dark' : 'light');
        }

        onThemeChange?.(theme);
    };
</script>

<IconButton Icon={theme === 'dark' ? Moon : Sun} color="muted" onclick={() => handleOnChange()} />
