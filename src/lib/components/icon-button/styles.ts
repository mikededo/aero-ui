import type { AnyMeltElement } from '@melt-ui/svelte';
import type { IconProps, Icon as LucideIcon } from 'lucide-svelte';
import type { ComponentType } from 'svelte';
import { twMerge } from 'tailwind-merge';

export type IconButtonColor = 'primary' | 'secondary' | 'muted' | 'destructive';
export type IconButtonSizes = 'small' | 'default' | 'large';
export type BaseProps = {
  Icon: ComponentType<LucideIcon>;
  size?: IconButtonSizes;
  color?: IconButtonColor;
  href?: string;
  strokeWidth?: IconProps['strokeWidth'];
  meltElement?: AnyMeltElement;
};

const ICON_SIZES: Record<IconButtonSizes, string> = {
  small: 'w-4 h-5',
  default: 'w-5 h-5',
  large: 'w-6 h-6'
};
const ICON_WRAPPER_SIZES: Record<IconButtonSizes, string> = {
  small: 'size-6',
  default: 'size-8',
  large: 'size-10'
};
const ICON_WRAPPER_CLASSES =
  'flex items-center justify-center rounded-full hover:bg-muted transition-colors cursor-pointer';
const COLORS: Record<IconButtonColor, string> = {
  primary:
    'bg-primary dark:bg-primary-800 hover:bg-primary/90 hover:dark:bg-primary-800/90 stroke-white',
  secondary:
    'bg-secondary dark:bg-secondary-900 stroke-secondary-foreground hover:bg-secondary/80 dark:hover:bg-secondary-900/90 border border-transparent hover:border-secondary-300 dark:hover:border-secondary-700',
  muted: 'bg-transparent hover:bg-secondary stroke-secondary-foreground',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90 stroke-destructive stroke-white'
};

export const getWrapperClasses = ({ size, color }: Required<Pick<BaseProps, 'size' | 'color'>>) =>
  twMerge(
    ICON_WRAPPER_CLASSES,
    ICON_WRAPPER_SIZES[size],
    COLORS[color ?? 'primary'],
    ICON_SIZES[size]
  );

export const getIconClasses = ({ size }: Required<Pick<BaseProps, 'size'>>) =>
  twMerge(ICON_SIZES[size], 'stroke-inherit');
