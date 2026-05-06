import React from "react";

export function ZestToggleButton({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={`px-4 py-2 rounded-lg border-2 transition-colors duration-200 font-medium ${
        active
          ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );
}
