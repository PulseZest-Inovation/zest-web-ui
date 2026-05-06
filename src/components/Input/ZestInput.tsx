import React from "react";

export interface ZestInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export const ZestInput: React.FC<ZestInputProps> = ({
  containerClassName = "",
  className = "",
  ...props
}) => {
  return (
    <input
      {...props}
      className={`px-3 py-1.5 border border-gray-300 rounded-lg w-80 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
    />
  );
};
