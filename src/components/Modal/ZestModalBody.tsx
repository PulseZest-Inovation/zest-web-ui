import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ZestModalBody: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`p-4 text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </div>
  );
};
