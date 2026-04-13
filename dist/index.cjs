"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AlertProvider: () => AlertProvider,
  ZestBadge: () => ZestBadge,
  ZestButton: () => ZestButton,
  ZestDivider: () => ZestDivider,
  ZestFloatingButton: () => ZestFloatingButton,
  ZestHeading: () => ZestHeading,
  ZestIconButton: () => ZestIconButton,
  ZestInput: () => ZestInput,
  ZestInputTitle: () => ZestInputTitle,
  ZestLabel: () => ZestLabel,
  ZestLinkButton: () => ZestLinkButton,
  ZestModal: () => ZestModal,
  ZestModalBody: () => ZestModalBody,
  ZestModalFooter: () => ZestModalFooter,
  ZestModalHeader: () => ZestModalHeader,
  ZestSelector: () => ZestSelector,
  ZestSpin: () => ZestSpin,
  ZestTable: () => ZestTable,
  ZestTabs: () => ZestTabs,
  ZestText: () => ZestText,
  ZestTitle: () => ZestTitle,
  ZestToggleButton: () => ZestToggleButton,
  useAlert: () => useAlert
});
module.exports = __toCommonJS(index_exports);

// src/components/Text/ZestBadge.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function ZestBadge({ children, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 ${className}`, children });
}
{
}

// src/components/Text/ZestHeading.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function ZestHeading({ children, level = 2, className = "" }) {
  const Tag = `h${level}`;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tag, { className: `font-bold ${className}`, children });
}
{
}

// src/components/Text/ZestLabel.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function ZestLabel({ htmlFor, children, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
function ZestText({ children, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: `text-primary ${className}`, children });
}
{
}
{
}

// src/components/Text/ZestTitle.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function ZestTitle({
  children,
  icon,
  className = "",
  as: Tag = "h2"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: `flex items-center gap-2 mb-6 text-primary ${className}`, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "flex items-center", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Tag, { className: "text-2xl font-bold", children })
  ] });
}
{
}

// src/components/Text/ZestInputTitle.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var ZestInputTitle = ({
  htmlFor,
  children,
  className = "",
  required = false
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "label",
    {
      htmlFor,
      className: `w-40 text-sm font-medium text-primary ${className}`,
      children: [
        children,
        required && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
      ]
    }
  );
};

// src/components/Button/ZestButton.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "button",
    {
      ...props,
      disabled: disabled || loading,
      className: `px-4 py-2 rounded-lg border-2 hover:scale-105 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400 transition-transform duration-200 flex items-center gap-2 ${variantStyles[variant]} ${className}`,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "animate-spin", children: "\u23F3" }),
        !loading && icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "flex items-center", children: icon }),
        children
      ]
    }
  );
}
{
}

// src/components/Button/ZestFloatingButton.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function ZestFloatingButton({ icon, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_jsx_runtime9 = require("react/jsx-runtime");
function ZestIconButton({ icon, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var import_jsx_runtime10 = require("react/jsx-runtime");
function ZestLinkButton({ href, children, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_react = __toESM(require("react"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
function ZestToggleButton({ children }) {
  const [active, setActive] = import_react.default.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var import_jsx_runtime12 = require("react/jsx-runtime");
function ZestDivider() {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("hr", { className: "border-gray-200 my-4" });
}

// src/components/Alert/AlertProvider.tsx
var import_react2 = __toESM(require("react"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
var AlertContext = import_react2.default.createContext(void 0);
var DEFAULT_ALERT = {
  open: false,
  type: "info",
  message: "",
  duration: 3e3
};
var AlertProvider = ({ children }) => {
  const [alert, setAlert] = import_react2.default.useState(DEFAULT_ALERT);
  const timerRef = import_react2.default.useRef(null);
  const showAlert = import_react2.default.useCallback(
    ({ type = "info", message, duration = 3e3 }) => {
      setAlert({ open: true, type, message, duration });
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setAlert((a) => ({ ...a, open: false }));
      }, duration);
    },
    []
  );
  import_react2.default.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(AlertContext.Provider, { value: { showAlert }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ZestAlertGlobal, { ...alert })
  ] });
};
function useAlert() {
  const ctx = import_react2.default.useContext(AlertContext);
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      className: `fixed top-0 left-1/2 -translate-x-1/2 z-[9999] max-w-md w-fit px-4 py-2 rounded-lg border-2 shadow-lg transition-all duration-300 ${typeStyles[type]}`,
      style: {
        pointerEvents: "auto",
        background: "#fffbe6",
        // fallback for visibility
        color: "#222",
        border: "2px solid #facc15"
      },
      children: message
    }
  );
};

// src/components/Input/ZestInput.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var ZestInput = ({
  containerClassName = "",
  className = "",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_jsx_runtime15 = require("react/jsx-runtime");
var ZestSelector = ({
  options,
  placeholder = "Select Option",
  containerClassName = "",
  value = "",
  className = "",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: containerClassName, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "select",
    {
      ...props,
      value: value ?? "",
      className: `px-3 py-1.5 border w-80 border-gray-300 rounded-lg text-primary bg-primary focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "", disabled: true, children: placeholder }),
        options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: opt.value, children: opt.label }, opt.value))
      ]
    }
  ) });
};

// src/components/Modal/ZestModal.tsx
var import_react3 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
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
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40 ${overlayClassName}`,
      onClick: onClose,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var import_jsx_runtime17 = require("react/jsx-runtime");
var ZestModalBody = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: `p-4 ${className}`, children });
};

// src/components/Modal/ZestModalFooter.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var ZestModalFooter = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: `flex justify-end gap-2 p-4 border-t ${className}`, children });
};

// src/components/Modal/ZestModalHeader.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var ZestModalHeader = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: `flex items-center justify-between p-4 border-b ${className}`, children });
};

// src/components/Table/ZestTable.tsx
var import_react4 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function ZestTable({
  columns,
  data,
  className = "",
  rowsPerPage = 7
}) {
  const [sortKey, setSortKey] = (0, import_react4.useState)("");
  const [sortOrder, setSortOrder] = (0, import_react4.useState)("asc");
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(1);
  const handleSort = (key, sortable) => {
    if (!sortable) return;
    if (sortKey === key) {
      setSortOrder((prev) => prev === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };
  const sortedData = (0, import_react4.useMemo)(() => {
    const copied = [...data];
    if (!sortKey) return copied;
    const column = columns.find((col) => col.key === sortKey);
    if (!column) return copied;
    copied.sort((a, b) => {
      const valueA = column.sortValue ? column.sortValue(a) : a[sortKey];
      const valueB = column.sortValue ? column.sortValue(b) : b[sortKey];
      if (valueA == null && valueB == null) return 0;
      if (valueA == null) return sortOrder === "asc" ? -1 : 1;
      if (valueB == null) return sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }
      if (valueA instanceof Date && valueB instanceof Date) {
        return sortOrder === "asc" ? valueA.getTime() - valueB.getTime() : valueB.getTime() - valueA.getTime();
      }
      const aStr = String(valueA).toLowerCase();
      const bStr = String(valueB).toLowerCase();
      return sortOrder === "asc" ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });
    return copied;
  }, [data, columns, sortKey, sortOrder]);
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const paginatedData = (0, import_react4.useMemo)(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);
  (0, import_react4.useEffect)(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);
  const getSortIndicator = (key, sortable) => {
    if (!sortable) return null;
    if (sortKey !== key) return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-xs opacity-50", children: "\u2195" });
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-xs font-semibold", children: sortOrder === "asc" ? "\u2191" : "\u2193" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      className: `overflow-hidden rounded-xl border border-primary bg-primary text-primary shadow-sm ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("table", { className: "min-w-max w-max border-collapse", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tr", { className: "bg-primary", children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "th",
            {
              onClick: () => handleSort(col.key, col.sortable),
              className: `border-b border-primary px-4 py-3 text-left text-sm font-semibold text-primary sm:px-5 ${col.sortable ? "cursor-pointer select-none" : ""}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center justify-between gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "whitespace-nowrap", children: col.title }),
                getSortIndicator(col.key, col.sortable)
              ] })
            },
            col.key
          )) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tbody", { children: paginatedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "td",
            {
              colSpan: columns.length,
              className: "px-4 py-10 text-center text-sm text-primary sm:px-5",
              children: "No data available"
            }
          ) }) : paginatedData.map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "tr",
            {
              className: "border-b border-primary bg-primary text-primary transition-colors hover:bg-primary",
              children: columns.map((col, colIdx) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                "td",
                {
                  className: `whitespace-nowrap px-4 py-4 text-sm align-middle text-primary sm:px-5 whitespace-nowrap ${colIdx === 0 ? "font-medium" : ""}`,
                  children: col.render ? col.render(row, (currentPage - 1) * rowsPerPage + idx) : row[col.key]
                },
                col.key
              ))
            },
            idx
          )) })
        ] }) }),
        sortedData.length > rowsPerPage && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col gap-3 border-t border-primary px-4 py-3 text-primary sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "text-sm text-primary", children: [
            "Showing ",
            (currentPage - 1) * rowsPerPage + 1,
            " to",
            " ",
            Math.min(currentPage * rowsPerPage, sortedData.length),
            " of",
            " ",
            sortedData.length,
            " entries"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              "button",
              {
                type: "button",
                onClick: () => setCurrentPage((prev) => prev - 1),
                disabled: currentPage === 1,
                className: "rounded-md border border-primary bg-primary px-3 py-1.5 text-sm font-medium text-primary disabled:cursor-not-allowed disabled:opacity-50",
                children: "Previous"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "text-sm text-primary", children: [
              "Page ",
              currentPage,
              " of ",
              totalPages
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              "button",
              {
                type: "button",
                onClick: () => setCurrentPage((prev) => prev + 1),
                disabled: currentPage === totalPages,
                className: "rounded-md border border-primary bg-primary px-3 py-1.5 text-sm font-medium text-primary disabled:cursor-not-allowed disabled:opacity-50",
                children: "Next"
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// src/components/Tabs/ZestTab.tsx
var import_react5 = __toESM(require("react"), 1);
var import_jsx_runtime21 = require("react/jsx-runtime");
var ZestTabs = ({ tabNames, children, className = "" }) => {
  const [active, setActive] = import_react5.default.useState(0);
  const [fade, setFade] = import_react5.default.useState(true);
  import_react5.default.useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 10);
    return () => clearTimeout(timeout);
  }, [active]);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex border-b mb-4 ", children: tabNames.map((name, idx) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "button",
      {
        className: `px-4 py-2 -mb-px border-b-2 cursor-pointer transition-colors duration-200 focus:outline-none ${active === idx ? "border-blue-500 text-blue-600 font-semibold" : "border-transparent text-gray-500 hover:text-blue-500"}`,
        onClick: () => setActive(idx),
        type: "button",
        children: name
      },
      name
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_jsx_runtime22 = require("react/jsx-runtime");
var ZestSpin = ({ size = 24, color = "#2563eb", className = "" }) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  "span",
  {
    className: `inline-block animate-spin ${className}`,
    style: { width: size, height: size },
    "aria-label": "Loading",
    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 50 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
