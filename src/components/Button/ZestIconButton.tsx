import React from "react";

export interface ZestIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export function ZestIconButton({ icon, className = "", ...props }: ZestIconButtonProps) {
  return (
    <button
      {...props}
      className={`p-2 rounded-lg border hover:scale-105 transition ${className}`}
    >
      {icon}
    </button>
  );
}

// Usage:
{/* <ZestIconButton icon={<TrashIcon />} /> */}