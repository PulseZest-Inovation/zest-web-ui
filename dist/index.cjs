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
  ZestBadge: () => ZestBadge,
  ZestButton: () => ZestButton,
  ZestDivider: () => ZestDivider,
  ZestFloatingButton: () => ZestFloatingButton,
  ZestHeading: () => ZestHeading,
  ZestIconButton: () => ZestIconButton,
  ZestLabel: () => ZestLabel,
  ZestLinkButton: () => ZestLinkButton,
  ZestText: () => ZestText,
  ZestToggleButton: () => ZestToggleButton
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

// src/components/Button/ZestButton.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "button",
    {
      ...props,
      disabled: disabled || loading,
      className: `px-4 py-2 rounded-lg border-2 hover:scale-105 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400 transition-transform duration-200 flex items-center gap-2 ${variantStyles[variant]} ${className}`,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "animate-spin", children: "\u23F3" }),
        !loading && icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "flex items-center", children: icon }),
        children
      ]
    }
  );
}
{
}

// src/components/Button/ZestFloatingButton.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function ZestFloatingButton({ icon, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_jsx_runtime7 = require("react/jsx-runtime");
function ZestIconButton({ icon, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
var import_jsx_runtime8 = require("react/jsx-runtime");
function ZestLinkButton({ href, children, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_jsx_runtime9 = require("react/jsx-runtime");
function ZestToggleButton({ children }) {
  const [active, setActive] = import_react.default.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var import_jsx_runtime10 = require("react/jsx-runtime");
function ZestDivider() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("hr", { className: "border-gray-200 my-4" });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ZestBadge,
  ZestButton,
  ZestDivider,
  ZestFloatingButton,
  ZestHeading,
  ZestIconButton,
  ZestLabel,
  ZestLinkButton,
  ZestText,
  ZestToggleButton
});
