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
      className={`px-3 py-1.5 border border-gray-300 rounded-lg w-80 text-primary focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className}`}
    />
  );
};


// Usage:
{/* <div className="flex items-center gap-3">
  <ZestInputTitle htmlFor="email" required>
    Email
  </ZestInputTitle>

  <ZestInput
    id="email"
    type="email"
    placeholder="Enter email"
  />
</div> */}