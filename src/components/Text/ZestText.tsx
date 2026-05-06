import React from "react";

export interface ZestTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ZestText({ children, className = "" }: ZestTextProps) {
  return (
    <p className={`text-gray-700 dark:text-gray-300 ${className}`}>{children}</p>
  );
}
