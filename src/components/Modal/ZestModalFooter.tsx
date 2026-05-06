import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ZestModalFooter: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div
      className={`flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
};
