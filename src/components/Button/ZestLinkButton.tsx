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
      className={`px-4 py-2 rounded-lg text-blue-600 hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

// Usage:
{/* <ZestLinkButton href="/dashboard">
  Go to dashboard
</ZestLinkButton> */}