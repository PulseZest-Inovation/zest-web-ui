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
var import_react4 = __toESM(require("react"), 1);
var import_jsx_runtime20 = require("react/jsx-runtime");
var SIZE_PADDING = {
  small: "px-3 py-1.5",
  middle: "px-4 py-3",
  large: "px-5 py-4"
};
function getRowKey(row, rowKey, idx) {
  if (!rowKey) return idx;
  if (typeof rowKey === "function") return rowKey(row);
  return row[rowKey] ?? idx;
}
function getCellValue(row, col) {
  return row[col.dataIndex ?? col.key];
}
function FilterDropdown({
  filters,
  activeValues,
  multiple,
  onApply,
  onReset
}) {
  const [selected, setSelected] = (0, import_react4.useState)(activeValues);
  const toggle = (value) => {
    if (multiple) {
      setSelected(
        (prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    } else {
      setSelected((prev) => prev.includes(value) ? [] : [value]);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      className: "absolute z-50 top-full left-0 mt-1 min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg text-sm text-gray-700",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "max-h-52 overflow-y-auto p-2 space-y-0.5", children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          "label",
          {
            className: "flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded hover:bg-gray-50",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                "input",
                {
                  type: multiple ? "checkbox" : "radio",
                  checked: selected.includes(f.value),
                  onChange: () => toggle(f.value),
                  className: "accent-blue-500 h-3.5 w-3.5"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "select-none", children: f.text })
            ]
          },
          String(f.value)
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-between border-t border-gray-100 px-2 py-1.5 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "button",
            {
              onClick: () => {
                setSelected([]);
                onReset();
              },
              className: "text-xs text-gray-400 hover:text-gray-600",
              children: "Reset"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "button",
            {
              onClick: () => onApply(selected),
              className: "rounded bg-blue-500 px-2.5 py-1 text-xs text-white hover:bg-blue-600",
              children: "OK"
            }
          )
        ] })
      ]
    }
  );
}
function TableSpinner() {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-[1px] rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "svg",
    {
      className: "h-8 w-8 animate-spin text-blue-500",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "circle",
          {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8v8H4z"
          }
        )
      ]
    }
  ) });
}
function ZestTable({
  columns,
  data,
  rowKey,
  className = "",
  rowsPerPage = 10,
  pagination,
  defaultSortKey = "",
  defaultSortOrder = "asc",
  loading = false,
  rowSelection,
  expandable,
  size = "middle",
  bordered = false,
  striped = false,
  onRow,
  emptyText = "No data available",
  searchable = false,
  searchPlaceholder = "Search\u2026",
  summary,
  scroll,
  title,
  footer,
  exportCsv = false,
  exportFilename = "table-data"
}) {
  const [sortKey, setSortKey] = (0, import_react4.useState)(defaultSortKey);
  const [sortOrder, setSortOrder] = (0, import_react4.useState)(defaultSortOrder);
  const defaultPageSize = pagination !== false ? pagination?.pageSize ?? rowsPerPage : rowsPerPage;
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(1);
  const [activePageSize, setActivePageSize] = (0, import_react4.useState)(defaultPageSize);
  const [searchText, setSearchText] = (0, import_react4.useState)("");
  const [activeFilters, setActiveFilters] = (0, import_react4.useState)({});
  const [openFilterKey, setOpenFilterKey] = (0, import_react4.useState)(null);
  const [internalSelectedKeys, setInternalSelectedKeys] = (0, import_react4.useState)(rowSelection?.selectedRowKeys ?? []);
  const selectedKeys = rowSelection?.selectedRowKeys ?? internalSelectedKeys;
  const [expandedKeys, setExpandedKeys] = (0, import_react4.useState)(
    expandable?.defaultExpandedRowKeys ?? []
  );
  const effectiveExpandedKeys = expandable?.expandedRowKeys ?? expandedKeys;
  const wrapperRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    const onDown = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpenFilterKey(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);
  const filteredData = (0, import_react4.useMemo)(() => {
    let result = [...data];
    if (searchable && searchText.trim()) {
      const lower = searchText.trim().toLowerCase();
      result = result.filter(
        (row) => columns.some((col) => {
          const val = getCellValue(row, col);
          return val != null && String(val).toLowerCase().includes(lower);
        })
      );
    }
    Object.entries(activeFilters).forEach(([colKey, values]) => {
      if (!values.length) return;
      const col = columns.find((c) => c.key === colKey);
      if (!col) return;
      result = result.filter(
        (row) => col.onFilter ? values.some((v) => col.onFilter(v, row)) : values.includes(getCellValue(row, col))
      );
    });
    return result;
  }, [data, searchText, searchable, activeFilters, columns]);
  const sortedData = (0, import_react4.useMemo)(() => {
    if (!sortKey) return filteredData;
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return filteredData;
    return [...filteredData].sort((a, b) => {
      const va = col.sortValue ? col.sortValue(a) : getCellValue(a, col);
      const vb = col.sortValue ? col.sortValue(b) : getCellValue(b, col);
      if (va == null && vb == null) return 0;
      if (va == null) return sortOrder === "asc" ? -1 : 1;
      if (vb == null) return sortOrder === "asc" ? 1 : -1;
      if (typeof va === "number" && typeof vb === "number")
        return sortOrder === "asc" ? va - vb : vb - va;
      if (va instanceof Date && vb instanceof Date)
        return sortOrder === "asc" ? va.getTime() - vb.getTime() : vb.getTime() - va.getTime();
      const as = String(va).toLowerCase();
      const bs = String(vb).toLowerCase();
      return sortOrder === "asc" ? as.localeCompare(bs) : bs.localeCompare(as);
    });
  }, [filteredData, sortKey, sortOrder, columns]);
  const showPagination = pagination !== false;
  const paginationConfig = pagination !== false ? pagination : void 0;
  const totalPages = Math.ceil(sortedData.length / activePageSize);
  const paginatedData = (0, import_react4.useMemo)(() => {
    if (!showPagination) return sortedData;
    const start = (currentPage - 1) * activePageSize;
    return sortedData.slice(start, start + activePageSize);
  }, [sortedData, currentPage, activePageSize, showPagination]);
  (0, import_react4.useEffect)(() => {
    if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);
  (0, import_react4.useEffect)(() => {
    setCurrentPage(1);
  }, [searchText, activeFilters]);
  const handleSort = (key, sortable) => {
    if (!sortable) return;
    if (sortKey === key) {
      setSortOrder((p) => p === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };
  const updateSelection = (next) => {
    const nextRows = data.filter(
      (row, i) => next.includes(getRowKey(row, rowKey, i))
    );
    rowSelection?.onChange?.(next, nextRows);
    setInternalSelectedKeys(next);
  };
  const handleSelectAll = () => {
    const pageKeys = paginatedData.map(
      (row, idx) => getRowKey(row, rowKey, (currentPage - 1) * activePageSize + idx)
    );
    const allSelected = pageKeys.every((k) => selectedKeys.includes(k));
    updateSelection(
      allSelected ? selectedKeys.filter((k) => !pageKeys.includes(k)) : [.../* @__PURE__ */ new Set([...selectedKeys, ...pageKeys])]
    );
  };
  const handleSelectRow = (row, absoluteIdx) => {
    const key = getRowKey(row, rowKey, absoluteIdx);
    if (rowSelection?.type === "radio") {
      updateSelection([key]);
    } else {
      updateSelection(
        selectedKeys.includes(key) ? selectedKeys.filter((k) => k !== key) : [...selectedKeys, key]
      );
    }
  };
  const handleExpand = (row, key) => {
    const isExpanded = effectiveExpandedKeys.includes(key);
    expandable?.onExpand?.(!isExpanded, row);
    if (!expandable?.expandedRowKeys) {
      setExpandedKeys(
        (prev) => isExpanded ? prev.filter((k) => k !== key) : [...prev, key]
      );
    }
  };
  const handleFilterApply = (colKey, values) => {
    setActiveFilters((prev) => ({ ...prev, [colKey]: values }));
    setOpenFilterKey(null);
  };
  const handleFilterReset = (colKey) => {
    setActiveFilters((prev) => ({ ...prev, [colKey]: [] }));
    setOpenFilterKey(null);
  };
  const handleExportCsv = () => {
    const header = columns.map((c) => `"${String(c.title)}"`).join(",");
    const rows = sortedData.map(
      (row) => columns.map((col) => {
        const raw = getCellValue(row, col);
        return `"${raw != null ? String(raw).replace(/"/g, '""') : ""}"`;
      }).join(",")
    );
    const blob = new Blob([[header, ...rows].join("\n")], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportFilename}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const cellPad = SIZE_PADDING[size];
  const hasSelect = !!rowSelection;
  const hasExpand = !!expandable;
  const allPageSelected = paginatedData.length > 0 && paginatedData.every(
    (row, idx) => selectedKeys.includes(
      getRowKey(row, rowKey, (currentPage - 1) * activePageSize + idx)
    )
  );
  const somePageSelected = !allPageSelected && paginatedData.some(
    (row, idx) => selectedKeys.includes(
      getRowKey(row, rowKey, (currentPage - 1) * activePageSize + idx)
    )
  );
  const pageSizeOptions = paginationConfig?.pageSizeOptions ?? [10, 20, 50, 100];
  const showSizeChanger = paginationConfig?.showSizeChanger ?? false;
  const startEntry = sortedData.length === 0 ? 0 : (currentPage - 1) * activePageSize + 1;
  const endEntry = Math.min(currentPage * activePageSize, sortedData.length);
  const tableStyle = {};
  if (scroll?.x) tableStyle.minWidth = scroll.x;
  const sortIcon = (key, sortable) => {
    if (!sortable) return null;
    if (sortKey !== key)
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "opacity-30 text-[11px]", children: "\u2195" });
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-blue-500 text-[11px]", children: sortOrder === "asc" ? "\u2191" : "\u2193" });
  };
  const pageButtons = () => {
    if (totalPages <= 1) return null;
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("\u2026");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++)
        pages.push(i);
      if (currentPage < totalPages - 2) pages.push("\u2026");
      pages.push(totalPages);
    }
    return pages.map(
      (p, i) => p === "\u2026" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "px-1 text-gray-400 text-sm", children: "\u2026" }, `ellipsis-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "button",
        {
          onClick: () => setCurrentPage(p),
          className: `min-w-[30px] rounded px-2 py-1 text-sm font-medium transition-colors ${currentPage === p ? "bg-blue-500 text-white shadow-sm" : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"}`,
          children: p
        },
        p
      )
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { ref: wrapperRef, className: `flex flex-col gap-0 ${className}`, children: [
    (searchable || exportCsv) && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center justify-between gap-3 mb-3 flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex-1" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2", children: [
        searchable && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "input",
            {
              type: "text",
              value: searchText,
              onChange: (e) => setSearchText(e.target.value),
              placeholder: searchPlaceholder,
              className: "rounded-lg border border-gray-200 bg-white pl-3 pr-7 py-1.5 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 w-52"
            }
          ),
          searchText && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "button",
            {
              onClick: () => setSearchText(""),
              className: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-base leading-none",
              children: "\xD7"
            }
          )
        ] }),
        exportCsv && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "button",
          {
            onClick: handleExportCsv,
            className: "rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50 transition-colors",
            children: "\u2193 Export CSV"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm", children: [
      loading && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TableSpinner, {}),
      title && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "border-b border-gray-100 px-4 py-3 text-sm font-medium text-gray-700", children: title() }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "div",
        {
          className: "w-full overflow-x-auto",
          style: scroll?.y ? { maxHeight: scroll.y, overflowY: "auto" } : void 0,
          children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            "table",
            {
              className: `w-full border-collapse ${bordered ? "border border-gray-200" : ""}`,
              style: tableStyle,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("thead", { className: "sticky top-0 z-[1] bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("tr", { children: [
                  hasExpand && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    "th",
                    {
                      className: `${cellPad} w-10 border-b border-gray-200 ${bordered ? "border-r border-gray-200" : ""}`
                    }
                  ),
                  hasSelect && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    "th",
                    {
                      className: `${cellPad} w-10 text-center border-b border-gray-200 ${bordered ? "border-r border-gray-200" : ""}`,
                      children: rowSelection?.type !== "radio" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                        "input",
                        {
                          type: "checkbox",
                          checked: allPageSelected,
                          ref: (el) => {
                            if (el) el.indeterminate = somePageSelected;
                          },
                          onChange: handleSelectAll,
                          className: "accent-blue-500 h-4 w-4 cursor-pointer"
                        }
                      )
                    }
                  ),
                  columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    "th",
                    {
                      onClick: () => handleSort(col.key, col.sortable),
                      style: { width: col.width, textAlign: col.align ?? "left" },
                      className: `border-b border-gray-200 ${cellPad} text-sm font-semibold text-gray-600 whitespace-nowrap select-none ${col.sortable ? "cursor-pointer hover:bg-gray-100 transition-colors" : ""} ${bordered ? "border-r border-gray-200 last:border-r-0" : ""}`,
                      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "relative flex items-center gap-1", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: col.title }),
                        sortIcon(col.key, col.sortable),
                        col.filters && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          "button",
                          {
                            onClick: (e) => {
                              e.stopPropagation();
                              setOpenFilterKey(
                                openFilterKey === col.key ? null : col.key
                              );
                            },
                            className: `ml-auto text-xs rounded px-1 py-0.5 transition-colors ${activeFilters[col.key]?.length ? "text-blue-500 bg-blue-50" : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"}`,
                            children: "\u25BC"
                          }
                        ),
                        openFilterKey === col.key && col.filters && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          FilterDropdown,
                          {
                            filters: col.filters,
                            activeValues: activeFilters[col.key] ?? [],
                            multiple: col.filterMultiple !== false,
                            onApply: (vals) => handleFilterApply(col.key, vals),
                            onReset: () => handleFilterReset(col.key)
                          }
                        )
                      ] })
                    },
                    col.key
                  ))
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tbody", { children: paginatedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  "td",
                  {
                    colSpan: columns.length + (hasSelect ? 1 : 0) + (hasExpand ? 1 : 0),
                    className: "px-4 py-14 text-center text-sm text-gray-400",
                    children: emptyText
                  }
                ) }) : paginatedData.map((row, idx) => {
                  const absoluteIdx = (currentPage - 1) * activePageSize + idx;
                  const key = getRowKey(row, rowKey, absoluteIdx);
                  const isSelected = selectedKeys.includes(key);
                  const isExpanded = effectiveExpandedKeys.includes(key);
                  const rowProps = onRow?.(row, absoluteIdx);
                  const canExpand = hasExpand && (expandable.rowExpandable ? expandable.rowExpandable(row) : true);
                  const checkboxDisabled = rowSelection?.getCheckboxProps?.(row)?.disabled ?? false;
                  let rowBg = "bg-white";
                  if (isSelected) rowBg = "bg-blue-50";
                  else if (striped && idx % 2 === 1) rowBg = "bg-gray-50/70";
                  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_react4.default.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                      "tr",
                      {
                        onClick: rowProps?.onClick,
                        onDoubleClick: rowProps?.onDoubleClick,
                        className: `border-b border-gray-100 transition-colors ${rowBg} ${rowProps?.onClick ? "cursor-pointer" : ""} hover:bg-blue-50/40 ${rowProps?.className ?? ""}`,
                        children: [
                          hasExpand && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            "td",
                            {
                              className: `${cellPad} text-center ${bordered ? "border-r border-gray-100" : ""}`,
                              children: canExpand && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                                "button",
                                {
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    handleExpand(row, key);
                                  },
                                  style: {
                                    transform: isExpanded ? "rotate(90deg)" : "none",
                                    transition: "transform 0.15s",
                                    display: "inline-block"
                                  },
                                  className: "text-gray-400 hover:text-gray-600 text-xs leading-none",
                                  children: "\u25B6"
                                }
                              )
                            }
                          ),
                          hasSelect && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            "td",
                            {
                              className: `${cellPad} text-center ${bordered ? "border-r border-gray-100" : ""}`,
                              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                                "input",
                                {
                                  type: rowSelection?.type === "radio" ? "radio" : "checkbox",
                                  checked: isSelected,
                                  disabled: checkboxDisabled,
                                  onChange: () => handleSelectRow(row, absoluteIdx),
                                  onClick: (e) => e.stopPropagation(),
                                  className: "accent-blue-500 h-4 w-4 cursor-pointer disabled:cursor-not-allowed"
                                }
                              )
                            }
                          ),
                          columns.map((col, colIdx) => {
                            const value = getCellValue(row, col);
                            return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                              "td",
                              {
                                style: {
                                  textAlign: col.align ?? "left",
                                  width: col.width
                                },
                                className: `${cellPad} text-sm text-gray-700 align-middle ${colIdx === 0 && !hasSelect ? "font-medium" : ""} ${col.ellipsis ? "max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap" : "whitespace-nowrap"} ${bordered ? "border-r border-gray-100 last:border-r-0" : ""}`,
                                children: col.render ? col.render(value, row, absoluteIdx) : value
                              },
                              col.key
                            );
                          })
                        ]
                      }
                    ),
                    hasExpand && isExpanded && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tr", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      "td",
                      {
                        colSpan: columns.length + (hasSelect ? 1 : 0) + 1,
                        className: `${cellPad} border-b border-gray-100`,
                        children: expandable.expandedRowRender(row, absoluteIdx)
                      }
                    ) })
                  ] }, key);
                }) }),
                summary && sortedData.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tfoot", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tr", { className: "bg-gray-50 font-medium", children: summary(sortedData) }) })
              ]
            }
          )
        }
      ),
      footer && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "border-t border-gray-100 px-4 py-2.5 text-sm text-gray-500", children: footer() })
    ] }),
    showPagination && sortedData.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "text-sm text-gray-500", children: paginationConfig?.showTotal ? paginationConfig.showTotal(sortedData.length, [startEntry, endEntry]) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
        "Showing",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "font-medium text-gray-700", children: startEntry }),
        " \u2013 ",
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "font-medium text-gray-700", children: endEntry }),
        " of",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "font-medium text-gray-700", children: sortedData.length }),
        " ",
        "entries",
        selectedKeys.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "ml-2 text-blue-500 font-medium", children: [
          "(",
          selectedKeys.length,
          " selected)"
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
        showSizeChanger && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "select",
          {
            value: activePageSize,
            onChange: (e) => {
              setActivePageSize(Number(e.target.value));
              setCurrentPage(1);
            },
            className: "rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100 mr-2",
            children: pageSizeOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("option", { value: opt, children: [
              opt,
              " / page"
            ] }, opt))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "button",
          {
            onClick: () => setCurrentPage(1),
            disabled: currentPage === 1,
            className: "rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors",
            children: "\xAB"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "button",
          {
            onClick: () => setCurrentPage((p) => p - 1),
            disabled: currentPage === 1,
            className: "rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors",
            children: "\u2039"
          }
        ),
        pageButtons(),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "button",
          {
            onClick: () => setCurrentPage((p) => p + 1),
            disabled: currentPage === totalPages || totalPages === 0,
            className: "rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors",
            children: "\u203A"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "button",
          {
            onClick: () => setCurrentPage(totalPages),
            disabled: currentPage === totalPages || totalPages === 0,
            className: "rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors",
            children: "\xBB"
          }
        )
      ] })
    ] })
  ] });
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
