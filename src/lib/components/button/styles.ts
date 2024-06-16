import { twMerge } from 'tailwind-merge';

export type ButtonVariant = 'condensed' | 'default' | 'expanded';
export type ButtonColor = 'primary' | 'secondary' | 'muted' | 'destructive';
export type BaseProps = { variant?: ButtonVariant; color?: ButtonColor };

const VARIANTS: Record<ButtonVariant, string> = {
  condensed: 'py-1 px-2.5 h-unset text-xs font-normal',
  default: 'px-4 py-2',
  expanded: 'px-6 py-3 text-md'
};
const COLORS: Record<ButtonColor, string> = {
  primary:
    'bg-primary dark:bg-primary-800 text-white hover:bg-primary/90 hover:dark:bg-primary-800/90 stroke-white',
  secondary:
    'bg-secondary dark:bg-secondary-900 text-secondary-foreground dark:text-white dark:stroke-white hover:bg-secondary/80 dark:hover:bg-secondary-900/90 border border-transparent hover:border-secondary-300 dark:hover:border-secondary-700 focus-visible:ring-secondary-300 dark:focus-visible:ring-secondary-700',
  muted:
    'bg-transparent text-foreground hover:bg-secondary stroke-foreground focus-visible:ring-secondary-300 dark:text-white dark:stroke-white hover:bg-secondary-900',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90 stroke-destructive focus-visible:ring-destructive'
};

export const sharedClasses = ({
  variant,
  color,
  className
}: Required<Pick<BaseProps, 'variant' | 'color'>> & { className?: string | null }) =>
  twMerge(
    'whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    VARIANTS[variant],
    COLORS[color],
    className
  );
