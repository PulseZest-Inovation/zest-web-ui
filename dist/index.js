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

// src/components/Button/ZestButton.tsx
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ...props,
      disabled: disabled || loading,
      className: `px-4 py-2 rounded-lg border-2 hover:scale-105 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-400 transition-transform duration-200 flex items-center gap-2 ${variantStyles[variant]} ${className}`,
      children: [
        loading && /* @__PURE__ */ jsx5("span", { className: "animate-spin", children: "\u23F3" }),
        !loading && icon && /* @__PURE__ */ jsx5("span", { className: "flex items-center", children: icon }),
        children
      ]
    }
  );
}
{
}

// src/components/Button/ZestFloatingButton.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function ZestFloatingButton({ icon, onClick }) {
  return /* @__PURE__ */ jsx6(
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
import { jsx as jsx7 } from "react/jsx-runtime";
function ZestIconButton({ icon, className = "", ...props }) {
  return /* @__PURE__ */ jsx7(
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
import { jsx as jsx8 } from "react/jsx-runtime";
function ZestLinkButton({ href, children, className = "", ...props }) {
  return /* @__PURE__ */ jsx8(
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
import { jsx as jsx9 } from "react/jsx-runtime";
function ZestToggleButton({ children }) {
  const [active, setActive] = React.useState(false);
  return /* @__PURE__ */ jsx9(
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
import { jsx as jsx10 } from "react/jsx-runtime";
function ZestDivider() {
  return /* @__PURE__ */ jsx10("hr", { className: "border-gray-200 my-4" });
}
export {
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
};
