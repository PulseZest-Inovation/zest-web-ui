import React from "react";

export interface ZestFloatingButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

export function ZestFloatingButton({ icon, onClick }: ZestFloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
    >
      {icon}
    </button>
  );
}
