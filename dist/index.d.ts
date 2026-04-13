import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';

interface ZestBadgeProps {
    children: React$1.ReactNode;
    className?: string;
}
declare function ZestBadge({ children, className }: ZestBadgeProps): react_jsx_runtime.JSX.Element;

interface ZestHeadingProps {
    children: React$1.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}
declare function ZestHeading({ children, level, className }: ZestHeadingProps): react_jsx_runtime.JSX.Element;

interface ZestLabelProps {
    htmlFor?: string;
    children: React$1.ReactNode;
    className?: string;
}
declare function ZestLabel({ htmlFor, children, className }: ZestLabelProps): react_jsx_runtime.JSX.Element;

interface ZestTextProps {
    children: React$1.ReactNode;
    className?: string;
}
declare function ZestText({ children, className }: ZestTextProps): react_jsx_runtime.JSX.Element;

interface ZestTitleProps {
    children: React$1.ReactNode;
    icon?: React$1.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4";
}
declare function ZestTitle({ children, icon, className, as: Tag, }: ZestTitleProps): react_jsx_runtime.JSX.Element;

interface ZestInputTitleProps {
    htmlFor?: string;
    children: React$1.ReactNode;
    className?: string;
    required?: boolean;
}
declare const ZestInputTitle: React$1.FC<ZestInputTitleProps>;

interface ZestButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    icon?: React$1.ReactNode;
    variant?: "primary" | "outline" | "ghost" | "theme";
    loading?: boolean;
}
declare function ZestButton({ className, icon, children, variant, loading, disabled, ...props }: ZestButtonProps): react_jsx_runtime.JSX.Element;

interface ZestFloatingButtonProps {
    icon: React$1.ReactNode;
    onClick?: () => void;
}
declare function ZestFloatingButton({ icon, onClick }: ZestFloatingButtonProps): react_jsx_runtime.JSX.Element;

interface ZestIconButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React$1.ReactNode;
}
declare function ZestIconButton({ icon, className, ...props }: ZestIconButtonProps): react_jsx_runtime.JSX.Element;

interface ZestLinkButtonProps extends React$1.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}
declare function ZestLinkButton({ href, children, className, ...props }: ZestLinkButtonProps): react_jsx_runtime.JSX.Element;

declare function ZestToggleButton({ children }: {
    children: React$1.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function ZestDivider(): react_jsx_runtime.JSX.Element;

type AlertType = "success" | "error" | "warning" | "info";
interface AlertContextValue {
    showAlert: (options: {
        type?: AlertType;
        message: string;
        duration?: number;
    }) => void;
}
declare const AlertProvider: React$1.FC<{
    children: React$1.ReactNode;
}>;
declare function useAlert(): AlertContextValue;

interface ZestInputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
}
declare const ZestInput: React$1.FC<ZestInputProps>;

type Option = {
    label: string;
    value: string;
};
interface ZestSelectorProps extends Omit<React$1.SelectHTMLAttributes<HTMLSelectElement>, "defaultValue"> {
    options: Option[];
    placeholder?: string;
    containerClassName?: string;
}
declare const ZestSelector: React$1.FC<ZestSelectorProps>;

interface ZestModalProps {
    open: boolean;
    onClose: () => void;
    children: React$1.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | number | string;
    className?: string;
    overlayClassName?: string;
}
declare const ZestModal: React$1.FC<ZestModalProps>;

interface Props$2 {
    children: React$1.ReactNode;
    className?: string;
}
declare const ZestModalBody: React$1.FC<Props$2>;

interface Props$1 {
    children: React$1.ReactNode;
    className?: string;
}
declare const ZestModalFooter: React$1.FC<Props$1>;

interface Props {
    children: React$1.ReactNode;
    className?: string;
}
declare const ZestModalHeader: React$1.FC<Props>;

interface ZestTableColumn<T = any> {
    key: string;
    title: string;
    render?: (row: T, idx: number) => React$1.ReactNode;
    sortable?: boolean;
    sortValue?: (row: T) => string | number | Date | null | undefined;
}
interface ZestTableProps<T = any> {
    columns: ZestTableColumn<T>[];
    data: T[];
    className?: string;
    rowsPerPage?: number;
    defaultSortKey?: string;
    defaultSortOrder?: "asc" | "desc";
}
declare function ZestTable<T = any>({ columns, data, className, rowsPerPage, defaultSortKey, defaultSortOrder, }: ZestTableProps<T>): react_jsx_runtime.JSX.Element;

interface ZestTabsProps {
    tabNames: string[];
    children: React$1.ReactNode[];
    className?: string;
}
declare const ZestTabs: React$1.FC<ZestTabsProps>;

interface ZestSpinProps {
    size?: number;
    color?: string;
    className?: string;
}
declare const ZestSpin: React.FC<ZestSpinProps>;

export { AlertProvider, ZestBadge, type ZestBadgeProps, ZestButton, type ZestButtonProps, ZestDivider, ZestFloatingButton, type ZestFloatingButtonProps, ZestHeading, type ZestHeadingProps, ZestIconButton, type ZestIconButtonProps, ZestInput, type ZestInputProps, ZestInputTitle, type ZestInputTitleProps, ZestLabel, type ZestLabelProps, ZestLinkButton, type ZestLinkButtonProps, ZestModal, ZestModalBody, ZestModalFooter, ZestModalHeader, type ZestModalProps, ZestSelector, type ZestSelectorProps, ZestSpin, type ZestSpinProps, ZestTable, type ZestTableColumn, type ZestTableProps, ZestTabs, type ZestTabsProps, ZestText, type ZestTextProps, ZestTitle, type ZestTitleProps, ZestToggleButton, useAlert };
