import React from "react";

export interface ZestLinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function ZestLinkButton({ href, children, className = "", ...props }: ZestLinkButtonProps) {
  return (
    <a
      href={href}
      {...props}
      className={`px-4 py-2 rounded-lg text-blue-600 hover:underline hover:text-blue-700 transition-colors dark:text-blue-400 dark:hover:text-blue-300 ${className}`}
    >
      {children}
    </a>
  );
}
