import React, { JSX } from "react";

export interface ZestHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function ZestHeading({ children, level = 2, className = "" }: ZestHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`font-bold ${className}`}>{children}</Tag>;
}

// Usage:
{/* <ZestHeading level={1}>Dashboard</ZestHeading> */}