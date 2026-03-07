import React from "react";

export interface ZestButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "theme";
  loading?: boolean;
}

export function ZestButton({
  className = "",
  icon,
  children,
  variant = "theme",
  loading = false,
  disabled,
  ...props
}: ZestButtonProps) {

  const variantStyles: Record<string, string> = {
    primary: "bg-blue-600 text-white border-blue-600",
    outline: "border-blue-600 text-blue-600",
    ghost: "border-transparent text-blue-600",
    theme: "bg-primary text-primary border-primary"
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`px-4 py-2 rounded-lg border-2 hover:scale-105 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400 transition-transform duration-200 flex items-center gap-2 ${variantStyles[variant]} ${className}`}
    >
      {loading && <span className="animate-spin">⏳</span>}

      {!loading && icon && (
        <span className="flex items-center">{icon}</span>
      )}

      {children}
    </button>
  );
}

// Usage:
{/* <ZestButton variant="theme">
  Submit
</ZestButton> */}