import type { TextProps } from "./Heading";

export function Badge({
  children,
  className,
  color = "red",
}: TextProps & { color?: string }) {
  return (
    <span
      className={`bg-${color}-50 dark:text-${color}-400 dark:bg-${color}-500/10 ring-1 ring-${color}-600/10 ring-inset 
      inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-normal text-red-700 w-fit justify-end self-end ${className}`}
    >
      {children}
    </span>
  );
}
