import React from "react";

export interface ZestBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function ZestBadge({ children, className = "" }: ZestBadgeProps) {
  return (
    <span
      className={`px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 ${className}`}
    >
      {children}
    </span>
  );
}
