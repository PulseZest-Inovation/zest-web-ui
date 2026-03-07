import React, { useEffect } from "react";

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export interface ZestModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | number | string;
  className?: string;
  overlayClassName?: string;
}

export const ZestModal: React.FC<ZestModalProps> = ({
  open,
  onClose,
  children,
  size = "md",
  className = "",
  overlayClassName = "",
}) => {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  let widthClass = "";
  let style: React.CSSProperties = {};

  if (
    typeof size === "string" &&
    (["sm", "md", "lg", "xl"] as const).includes(size as any)
  ) {
    widthClass = sizeMap[size as keyof typeof sizeMap];
  } else if (typeof size === "number") {
    style.width = size;
  } else if (typeof size === "string") {
    style.width = size;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 ${overlayClassName}`}
      onClick={onClose}
    >
      <div
        className={`bg-primary rounded-lg shadow-lg w-full ${widthClass} ${className}`}
        style={{
          ...style,
          maxWidth: "700px",
          minWidth: "320px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

// Usage: 
// import { ZestModal } from "zest-web-ui";

// export default function Page() {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <button onClick={() => setOpen(true)}>Open Modal</button>

//       <ZestModal open={open} onClose={() => setOpen(false)}>
//         <h2 className="text-lg font-bold">Hello</h2>
//         <p>This is a modal</p>
//       </ZestModal>
//     </>
//   );
// }