// src/components/Text/ZestBadge.tsx
import { jsx } from "react/jsx-runtime";
function ZestBadge({ children, className = "" }) {
  return /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 ${className}`, children });
}
{
}

// src/components/Text/ZestHeading.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function ZestHeading({ children, level = 2, className = "" }) {
  const Tag = `h${level}`;
  return /* @__PURE__ */ jsx2(Tag, { className: `font-bold ${className}`, children });
}
{
}

// src/components/Text/ZestLabel.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function ZestLabel({ htmlFor, children, className = "" }) {
  return /* @__PURE__ */ jsx3(
    "label",
    {
      htmlFor,
      className: `text-sm font-medium text-primary ${className}`,
      children
    }
  );
}
{
}

// src/components/Text/ZestText.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function ZestText({ children, className = "" }) {
  return /* @__PURE__ */ jsx4("p", { className: `text-primary ${className}`, children });
}
{
}
{
}

// src/components/Text/ZestTitle.tsx
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
function ZestTitle({
  children,
  icon,
  className = "",
  as: Tag = "h2"
}) {
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-2 mb-6 text-primary ${className}`, children: [
    icon && /* @__PURE__ */ jsx5("span", { className: "flex items-center", children: icon }),
    /* @__PURE__ */ jsx5(Tag, { className: "text-2xl font-bold", children })
  ] });
}
{
}

// src/components/Text/ZestInputTitle.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var ZestInputTitle = ({
  htmlFor,
  children,
  className = "",
  required = false
}) => {
  return /* @__PURE__ */ jsxs2(
    "label",
    {
      htmlFor,
      className: `w-40 text-sm font-medium text-primary ${className}`,
      children: [
        children,
        required && /* @__PURE__ */ jsx6("span", { className: "text-red-500 ml-1", children: "*" })
      ]
    }
  );
};

// src/components/Button/ZestButton.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function ZestButton({
  className = "",
  icon,
  children,
  variant = "theme",
  loading = false,
  disabled,
  ...props
}) {
  const variantStyles = {
    primary: "bg-blue-600 text-white border-blue-600",
    outline: "border-blue-600 text-blue-600",
    ghost: "border-transparent text-blue-600",
    theme: "bg-primary text-primary border-primary"
  };
  return /* @__PURE__ */ jsxs3(
    "button",
    {
      ...props,
      disabled: disabled || loading,
      className: `px-4 py-2 rounded-lg border-2 hover:scale-105 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400 transition-transform duration-200 flex items-center gap-2 ${variantStyles[variant]} ${className}`,
      children: [
        loading && /* @__PURE__ */ jsx7("span", { className: "animate-spin", children: "\u23F3" }),
        !loading && icon && /* @__PURE__ */ jsx7("span", { className: "flex items-center", children: icon }),
        children
      ]
    }
  );
}
{
}

// src/components/Button/ZestFloatingButton.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function ZestFloatingButton({ icon, onClick }) {
  return /* @__PURE__ */ jsx8(
    "button",
    {
      onClick,
      className: "fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center",
      children: icon
    }
  );
}
{
}

// src/components/Button/ZestIconButton.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function ZestIconButton({ icon, className = "", ...props }) {
  return /* @__PURE__ */ jsx9(
    "button",
    {
      ...props,
      className: `p-2 rounded-lg border hover:scale-105 transition ${className}`,
      children: icon
    }
  );
}
{
}

// src/components/Button/ZestLinkButton.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
function ZestLinkButton({ href, children, className = "", ...props }) {
  return /* @__PURE__ */ jsx10(
    "a",
    {
      href,
      ...props,
      className: `px-4 py-2 rounded-lg text-blue-600 hover:underline ${className}`,
      children
    }
  );
}
{
}

// src/components/Button/ZestToggleButton.tsx
import React from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
function ZestToggleButton({ children }) {
  const [active, setActive] = React.useState(false);
  return /* @__PURE__ */ jsx11(
    "button",
    {
      onClick: () => setActive(!active),
      className: `px-4 py-2 rounded-lg border ${active ? "bg-primary text-white" : ""}`,
      children
    }
  );
}
{
}

// src/components/Divider/ZestDivider.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function ZestDivider() {
  return /* @__PURE__ */ jsx12("hr", { className: "border-gray-200 my-4" });
}

// src/components/Alert/AlertProvider.tsx
import React2 from "react";
import { jsx as jsx13, jsxs as jsxs4 } from "react/jsx-runtime";
var AlertContext = React2.createContext(void 0);
var DEFAULT_ALERT = {
  open: false,
  type: "info",
  message: "",
  duration: 3e3
};
var AlertProvider = ({ children }) => {
  const [alert, setAlert] = React2.useState(DEFAULT_ALERT);
  const timerRef = React2.useRef(null);
  const showAlert = React2.useCallback(
    ({ type = "info", message, duration = 3e3 }) => {
      setAlert({ open: true, type, message, duration });
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setAlert((a) => ({ ...a, open: false }));
      }, duration);
    },
    []
  );
  React2.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxs4(AlertContext.Provider, { value: { showAlert }, children: [
    children,
    /* @__PURE__ */ jsx13(ZestAlertGlobal, { ...alert })
  ] });
};
function useAlert() {
  const ctx = React2.useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used within an AlertProvider");
  return ctx;
}
var ZestAlertGlobal = ({ open, type, message, duration }) => {
  if (!open || !message) return null;
  const typeStyles = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    info: "bg-blue-100 text-blue-700 border-blue-400"
  };
  return /* @__PURE__ */ jsx13(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      tabIndex: 0,
      className: `fixed top-24 left-1/2 -translate-x-1/2 z-[9999] max-w-md w-fit px-4 py-2 rounded-lg border-2 shadow-lg transition-all duration-300 ${typeStyles[type]}`,
      style: { pointerEvents: "auto" },
      children: message
    }
  );
};

// src/components/Input/ZestInput.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var ZestInput = ({
  containerClassName = "",
  className = "",
  ...props
}) => {
  return /* @__PURE__ */ jsx14(
    "input",
    {
      ...props,
      className: `px-3 py-1.5 border border-gray-300 rounded-lg w-80 text-primary focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className}`
    }
  );
};
{
}

// src/components/Selector/ZestSelector.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var ZestSelector = ({ options, containerClassName = "", ...props }) => /* @__PURE__ */ jsx15(
  "select",
  {
    ...props,
    className: `px-3 py-1.5 border w-80 border-gray-300 rounded-lg text-primary bg-primary focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${props.className || ""}`,
    children: options.map((opt) => /* @__PURE__ */ jsx15("option", { value: opt.value, children: opt.label }, opt.value))
  }
);

// src/components/Modal/ZestModal.tsx
import { useEffect } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl"
};
var ZestModal = ({
  open,
  onClose,
  children,
  size = "md",
  className = "",
  overlayClassName = ""
}) => {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
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
  let style = {};
  if (typeof size === "string" && ["sm", "md", "lg", "xl"].includes(size)) {
    widthClass = sizeMap[size];
  } else if (typeof size === "number") {
    style.width = size;
  } else if (typeof size === "string") {
    style.width = size;
  }
  return /* @__PURE__ */ jsx16(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40 ${overlayClassName}`,
      onClick: onClose,
      children: /* @__PURE__ */ jsx16(
        "div",
        {
          className: `bg-primary rounded-lg shadow-lg w-full ${widthClass} ${className}`,
          style: {
            ...style,
            maxWidth: "700px",
            minWidth: "320px"
          },
          onClick: (e) => e.stopPropagation(),
          children
        }
      )
    }
  );
};

// src/components/Modal/ZestModalBody.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var ZestModalBody = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsx17("div", { className: `p-4 ${className}`, children });
};

// src/components/Modal/ZestModalFooter.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var ZestModalFooter = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsx18("div", { className: `flex justify-end gap-2 p-4 border-t ${className}`, children });
};

// src/components/Modal/ZestModalHeader.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var ZestModalHeader = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsx19("div", { className: `flex items-center justify-between p-4 border-b ${className}`, children });
};

// src/components/Table/ZestTable.tsx
import { jsx as jsx20, jsxs as jsxs5 } from "react/jsx-runtime";
function ZestTable({ columns, data, className = "" }) {
  return /* @__PURE__ */ jsx20("div", { className: `overflow-x-auto ${className}`, children: /* @__PURE__ */ jsxs5("table", { className: "min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg", children: [
    /* @__PURE__ */ jsx20("thead", { children: /* @__PURE__ */ jsx20("tr", { children: columns.map((col) => /* @__PURE__ */ jsx20(
      "th",
      {
        className: "px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-zinc-700 bg-blue-50 bg-primary text-primary dark:text-blue-100",
        children: col.title
      },
      col.key
    )) }) }),
    /* @__PURE__ */ jsx20("tbody", { children: data.length === 0 ? /* @__PURE__ */ jsx20("tr", { children: /* @__PURE__ */ jsx20("td", { colSpan: columns.length, className: "px-4 py-4 text-center text-gray-400  bg-white dark:bg-zinc-900", children: "No data" }) }) : data.map((row, idx) => /* @__PURE__ */ jsx20(
      "tr",
      {
        className: idx % 2 === 0 ? "bg-white dark:bg-zinc-900" : "bg-blue-50 dark:bg-zinc-800",
        children: columns.map((col, colIdx) => /* @__PURE__ */ jsx20(
          "td",
          {
            className: `px-4 py-2 border-b border-gray-100 bg-primary text-primary ${colIdx === 0 ? "font-medium text-gray-900 dark:text-blue-100" : "text-gray-700 dark:text-blue-200"}`,
            children: col.render ? col.render(row, idx) : row[col.key]
          },
          col.key
        ))
      },
      idx
    )) })
  ] }) });
}

// src/components/Tabs/ZestTab.tsx
import React4 from "react";
import { jsx as jsx21, jsxs as jsxs6 } from "react/jsx-runtime";
var ZestTabs = ({ tabNames, children, className = "" }) => {
  const [active, setActive] = React4.useState(0);
  const [fade, setFade] = React4.useState(true);
  React4.useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 10);
    return () => clearTimeout(timeout);
  }, [active]);
  return /* @__PURE__ */ jsxs6("div", { className, children: [
    /* @__PURE__ */ jsx21("div", { className: "flex border-b mb-4 ", children: tabNames.map((name, idx) => /* @__PURE__ */ jsx21(
      "button",
      {
        className: `px-4 py-2 -mb-px border-b-2 cursor-pointer transition-colors duration-200 focus:outline-none ${active === idx ? "border-blue-500 text-blue-600 font-semibold" : "border-transparent text-gray-500 hover:text-blue-500"}`,
        onClick: () => setActive(idx),
        type: "button",
        children: name
      },
      name
    )) }),
    /* @__PURE__ */ jsx21(
      "div",
      {
        style: {
          opacity: fade ? 1 : 0,
          transition: "opacity 250ms"
        },
        children: children[active]
      }
    )
  ] });
};

// src/components/Spin/ZestSpin.tsx
import { jsx as jsx22, jsxs as jsxs7 } from "react/jsx-runtime";
var ZestSpin = ({ size = 24, color = "#2563eb", className = "" }) => /* @__PURE__ */ jsx22(
  "span",
  {
    className: `inline-block animate-spin ${className}`,
    style: { width: size, height: size },
    "aria-label": "Loading",
    children: /* @__PURE__ */ jsxs7(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 50 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx22(
            "circle",
            {
              cx: "25",
              cy: "25",
              r: "20",
              stroke: color,
              strokeWidth: "5",
              strokeDasharray: "31.4 31.4",
              strokeLinecap: "round",
              opacity: "0.3"
            }
          ),
          /* @__PURE__ */ jsx22(
            "circle",
            {
              cx: "25",
              cy: "25",
              r: "20",
              stroke: color,
              strokeWidth: "5",
              strokeDasharray: "31.4 31.4",
              strokeDashoffset: "15.7",
              strokeLinecap: "round"
            }
          )
        ]
      }
    )
  }
);
export {
  AlertProvider,
  ZestBadge,
  ZestButton,
  ZestDivider,
  ZestFloatingButton,
  ZestHeading,
  ZestIconButton,
  ZestInput,
  ZestInputTitle,
  ZestLabel,
  ZestLinkButton,
  ZestModal,
  ZestModalBody,
  ZestModalFooter,
  ZestModalHeader,
  ZestSelector,
  ZestSpin,
  ZestTable,
  ZestTabs,
  ZestText,
  ZestTitle,
  ZestToggleButton,
  useAlert
};
