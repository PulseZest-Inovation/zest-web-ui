import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ZestBadgeProps {
    children: React.ReactNode;
    className?: string;
}
declare function ZestBadge({ children, className }: ZestBadgeProps): react_jsx_runtime.JSX.Element;

interface ZestHeadingProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}
declare function ZestHeading({ children, level, className }: ZestHeadingProps): react_jsx_runtime.JSX.Element;

interface ZestLabelProps {
    htmlFor?: string;
    children: React.ReactNode;
    className?: string;
}
declare function ZestLabel({ htmlFor, children, className }: ZestLabelProps): react_jsx_runtime.JSX.Element;

interface ZestTextProps {
    children: React.ReactNode;
    className?: string;
}
declare function ZestText({ children, className }: ZestTextProps): react_jsx_runtime.JSX.Element;

interface ZestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    icon?: React.ReactNode;
    variant?: "primary" | "outline" | "ghost" | "theme";
    loading?: boolean;
}
declare function ZestButton({ className, icon, children, variant, loading, disabled, ...props }: ZestButtonProps): react_jsx_runtime.JSX.Element;

interface ZestFloatingButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
}
declare function ZestFloatingButton({ icon, onClick }: ZestFloatingButtonProps): react_jsx_runtime.JSX.Element;

interface ZestIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}
declare function ZestIconButton({ icon, className, ...props }: ZestIconButtonProps): react_jsx_runtime.JSX.Element;

interface ZestLinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}
declare function ZestLinkButton({ href, children, className, ...props }: ZestLinkButtonProps): react_jsx_runtime.JSX.Element;

declare function ZestToggleButton({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function ZestDivider(): react_jsx_runtime.JSX.Element;

export { ZestBadge, type ZestBadgeProps, ZestButton, type ZestButtonProps, ZestDivider, ZestFloatingButton, type ZestFloatingButtonProps, ZestHeading, type ZestHeadingProps, ZestIconButton, type ZestIconButtonProps, ZestLabel, type ZestLabelProps, ZestLinkButton, type ZestLinkButtonProps, ZestText, type ZestTextProps, ZestToggleButton };
