import React from "react";

type Option = {
  label: string;
  value: string;
};

export interface ZestSelectorProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "defaultValue"> {
  options: Option[];
  placeholder?: string;
  containerClassName?: string;
}

export const ZestSelector: React.FC<ZestSelectorProps> = ({
  options,
  placeholder = "Select Option",
  containerClassName = "",
  value = "",
  className = "",
  ...props
}) => {
  return (
    <div className={containerClassName}>
      <select
        {...props}
        value={value ?? ""}
        className={`px-3 py-1.5 border w-80 border-gray-300 rounded-lg text-primary bg-primary focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};