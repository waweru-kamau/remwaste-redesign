import type { TextProps } from "./Heading";

export function LightText({ children, className }: TextProps) {
  return (
    <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
}
