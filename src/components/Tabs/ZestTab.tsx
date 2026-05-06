import React from "react";

export interface ZestTabsProps {
  tabNames: string[];
  children: React.ReactNode[];
  className?: string;
}

export const ZestTabs: React.FC<ZestTabsProps> = ({ tabNames, children, className = "" }) => {
  const [active, setActive] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 10);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div className={className}>
      <div className="flex border-b border-gray-200 mb-4 dark:border-gray-700">
        {tabNames.map((name, idx) => (
          <button
            key={name}
            className={`px-4 py-2 -mb-px border-b-2 cursor-pointer transition-colors duration-200 focus:outline-none text-sm font-medium ${
              active === idx
                ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            }`}
            onClick={() => setActive(idx)}
            type="button"
          >
            {name}
          </button>
        ))}
      </div>
      <div style={{ opacity: fade ? 1 : 0, transition: "opacity 250ms" }}>
        {children[active]}
      </div>
    </div>
  );
};
