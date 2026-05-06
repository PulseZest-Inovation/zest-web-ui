import React from "react";

export interface ZestTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export function ZestTitle({ children, icon, className = "", as: Tag = "h2" }: ZestTitleProps) {
  return (
    <div className={`flex items-center gap-2 mb-6 text-gray-900 dark:text-gray-100 ${className}`}>
      {icon && <span className="flex items-center">{icon}</span>}
      <Tag className="text-2xl font-bold">{children}</Tag>
    </div>
  );
}
