import React from "react";

export interface ZestIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export function ZestIconButton({ icon, className = "", ...props }: ZestIconButtonProps) {
  return (
    <button
      {...props}
      className={`p-2 rounded-lg border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 hover:scale-105 transition dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 ${className}`}
    >
      {icon}
    </button>
  );
}
