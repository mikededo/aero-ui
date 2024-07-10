import { twMerge } from 'tailwind-merge';

type ClassProps = { invalid?: boolean; classes?: string | null; focusWithin?: boolean };

export const getInputClasses = ({ invalid, classes, focusWithin }: ClassProps = {}) =>
  twMerge(
    'border-input h-10 rounded border bg-background px-3 py-1 outline-none ring ring-transparent transition-all disabled:cursor-not-allowed disabled:bg-muted',
    focusWithin
      ? 'focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background'
      : 'focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
    invalid
      ? 'border-destructive ring-destructive ring-offset-2 ring-offset-background'
      : 'required:border-destructive required:ring-destructive required:ring-offset-2 required:ring-offset-background',
    classes
  );

export const getContainerClasses = (classes: string) =>
  twMerge('flex flex-col items-start gap-2', classes);

export const getLabelClasses = (classes: string) =>
  twMerge('text-xs font-semibold uppercase', classes);
