import type { TextProps } from "./Heading";

export function BodyText({ children, className }: TextProps) {
  return (
    <p className={`text-sm text-black dark:text-white ${className}`}>
      {children}
    </p>
  );
}
