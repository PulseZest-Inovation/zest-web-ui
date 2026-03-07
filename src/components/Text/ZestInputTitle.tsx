import React from "react";

export interface ZestInputTitleProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export const ZestInputTitle: React.FC<ZestInputTitleProps> = ({
  htmlFor,
  children,
  className = "",
  required = false,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`w-40 text-sm font-medium text-primary ${className}`}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};