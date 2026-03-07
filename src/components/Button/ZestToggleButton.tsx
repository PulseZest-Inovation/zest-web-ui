import React from "react";

export function ZestToggleButton({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={`px-4 py-2 rounded-lg border ${
        active ? "bg-primary text-white" : ""
      }`}
    >
      {children}
    </button>
  );
}

// Usage:
{/* <ZestToggleButton>
  Toggle me
</ZestToggleButton> */}