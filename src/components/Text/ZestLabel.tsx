import React from "react";

export interface ZestLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export function ZestLabel({ htmlFor, children, className = "" }: ZestLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-primary ${className}`}
    >
      {children}
    </label>
  );
}

//Usage: 
{/* <ZestLabel htmlFor="email">Email</ZestLabel>
<ZestInput id="email" /> */}