import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ZestModalHeader: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 border-b border-gray-200 text-gray-900 dark:border-gray-700 dark:text-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};
