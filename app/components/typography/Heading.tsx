import React from "react";

export interface TextProps {
  children: React.ReactNode;
  className?: string;
}
export function Heading({ children, className }: TextProps) {
  return <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>;
}
