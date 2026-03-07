import React from "react";

export interface ZestTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ZestText({ children, className = "" }: ZestTextProps) {
  return <p className={`text-primary ${className}`}>{children}</p>;
}

{/* Usage: */}
{/* <ZestText>This is description text</ZestText> */}