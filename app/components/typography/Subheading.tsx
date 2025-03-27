import type { TextProps } from "./Heading";

export function Subheading({ children, className }: TextProps) {
  return (
    <h2
      className={`text-2xl font-bold tracking-tight text-black dark:text-white bottom-4 right-4 ${className}`}
    >
      {children}
    </h2>
  );
}
