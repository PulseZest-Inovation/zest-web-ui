import React from "react";

export interface ZestBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function ZestBadge({ children, className = "" }: ZestBadgeProps) {
  return (
    <span className={`px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 ${className}`}>
      {children}
    </span>
  );
}

// usage: 
{/* <ZestBadge>Active</ZestBadge> */}