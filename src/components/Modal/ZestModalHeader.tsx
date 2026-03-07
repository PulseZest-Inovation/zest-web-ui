import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ZestModalHeader: React.FC<Props> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between p-4 border-b ${className}`}>
      {children}
    </div>
  );
};