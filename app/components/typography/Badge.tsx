import type { TextProps } from "./Heading";

const colorClasses = {
  red: {
    base: "bg-red-50 text-red-700 dark:text-red-400 dark:bg-red-500/10 ring-red-600/10",
  },

  orange: {
    base: "bg-orange-50 text-orange-700 dark:text-orange-400 dark:bg-orange-500/10 ring-orange-600/10",
  },
} as const;

type Color = keyof typeof colorClasses;

export function Badge({
  children,
  className,
  color = "red",
}: TextProps & { color?: Color }) {
  const colors = colorClasses[color];

  return (
    <span
      className={`${colors.base} ring-1 ring-inset inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-normal w-fit justify-end self-end ${className}`}
    >
      {children}
    </span>
  );
}
