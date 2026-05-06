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
    /** Unique identifier for the column */
    key: string;
    /** Column header label */
    title: React$1.ReactNode;
    /** Field name to read from each row (defaults to `key`) */
    dataIndex?: string;
    /** Custom cell renderer: (cellValue, row, rowIndex) => ReactNode */
    render?: (value: any, row: T, index: number) => React$1.ReactNode;
    /** Enable client-side sorting on this column */
    sortable?: boolean;
    /** Custom value extractor used for sorting */
    sortValue?: (row: T) => string | number | Date | null | undefined;
    /** Fixed column width (px number or CSS string) */
    width?: number | string;
    /** Text alignment inside cells */
    align?: "left" | "center" | "right";
    /** Filter options shown in the column header dropdown */
    filters?: {
        text: string;
        value: string | number | boolean;
    }[];
    /**
     * Custom filter logic. Receives the selected filter value and the row.
     * Defaults to strict equality against the cell value when omitted.
     */
    onFilter?: (value: string | number | boolean, row: T) => boolean;
    /** Allow selecting multiple filter values (default: true) */
    filterMultiple?: boolean;
    /** Truncate overflowing text with an ellipsis */
    ellipsis?: boolean;
}
interface ZestTableRowSelection<T = any> {
    /** Controlled list of selected row keys */
    selectedRowKeys?: (string | number)[];
    /** Fires when selection changes */
    onChange?: (keys: (string | number)[], rows: T[]) => void;
    /** Per-row checkbox props, e.g. `{ disabled: true }` */
    getCheckboxProps?: (row: T) => {
        disabled?: boolean;
    };
    /** "checkbox" (default) or "radio" */
    type?: "checkbox" | "radio";
}
interface ZestTableExpandable<T = any> {
    /** Content rendered below a row when it is expanded */
    expandedRowRender: (row: T, index: number) => React$1.ReactNode;
    /** Return false to hide the expand toggle for a specific row */
    rowExpandable?: (row: T) => boolean;
    /** Keys expanded by default (uncontrolled) */
    defaultExpandedRowKeys?: (string | number)[];
    /** Controlled expanded keys */
    expandedRowKeys?: (string | number)[];
    /** Fires when a row is expanded or collapsed */
    onExpand?: (expanded: boolean, row: T) => void;
}
interface ZestTablePagination {
    /** Rows per page */
    pageSize?: number;
    /** Show a page-size selector dropdown */
    showSizeChanger?: boolean;
    /** Options for the page-size selector (default: [10, 20, 50, 100]) */
    pageSizeOptions?: number[];
    /** Custom total label: (total, [from, to]) => ReactNode */
    showTotal?: (total: number, range: [number, number]) => React$1.ReactNode;
}
interface ZestTableProps<T = any> {
    /** Column definitions */
    columns: ZestTableColumn<T>[];
    /** Row data */
    data: T[];
    /**
     * Unique key per row — field name (string) or extractor function.
     * Falls back to the row index when omitted.
     */
    rowKey?: string | ((row: T) => string | number);
    /** Extra CSS classes on the outermost wrapper */
    className?: string;
    /** Default rows per page when `pagination` is not provided (default: 10) */
    rowsPerPage?: number;
    /**
     * Pagination config. Pass `false` to disable pagination entirely and show all
     * rows at once.
     */
    pagination?: ZestTablePagination | false;
    /** Column key that is sorted by default */
    defaultSortKey?: string;
    /** Default sort direction (default: "asc") */
    defaultSortOrder?: "asc" | "desc";
    /** Show a loading spinner overlay */
    loading?: boolean;
    rowSelection?: ZestTableRowSelection<T>;
    expandable?: ZestTableExpandable<T>;
    /** Cell density: "small" | "middle" (default) | "large" */
    size?: "small" | "middle" | "large";
    /** Add borders between cells and columns */
    bordered?: boolean;
    /** Alternate row background colour */
    striped?: boolean;
    /**
     * Per-row event/class override.
     * Example: `onRow={(row) => ({ onClick: () => console.log(row) })}`
     */
    onRow?: (row: T, index: number) => {
        onClick?: () => void;
        onDoubleClick?: () => void;
        className?: string;
    };
    /** Content shown when `data` is empty (default: "No data available") */
    emptyText?: React$1.ReactNode;
    /** Show a global search box above the table */
    searchable?: boolean;
    /** Placeholder text for the search box */
    searchPlaceholder?: string;
    /**
     * Render a summary / footer row inside `<tfoot>`.
     * Receives the full (filtered + sorted) dataset.
     */
    summary?: (data: T[]) => React$1.ReactNode;
    /** Horizontal / vertical scroll boundaries */
    scroll?: {
        x?: number | string;
        y?: number | string;
    };
    /** Content rendered above the table (inside the card) */
    title?: () => React$1.ReactNode;
    /** Content rendered below the table body (inside the card) */
    footer?: () => React$1.ReactNode;
    /** Show an "Export CSV" button in the toolbar */
    exportCsv?: boolean;
    /** File name for the downloaded CSV (without extension, default: "table-data") */
    exportFilename?: string;
}
declare function ZestTable<T = any>({ columns, data, rowKey, className, rowsPerPage, pagination, defaultSortKey, defaultSortOrder, loading, rowSelection, expandable, size, bordered, striped, onRow, emptyText, searchable, searchPlaceholder, summary, scroll, title, footer, exportCsv, exportFilename, }: ZestTableProps<T>): react_jsx_runtime.JSX.Element;

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

export { AlertProvider, ZestBadge, type ZestBadgeProps, ZestButton, type ZestButtonProps, ZestDivider, ZestFloatingButton, type ZestFloatingButtonProps, ZestHeading, type ZestHeadingProps, ZestIconButton, type ZestIconButtonProps, ZestInput, type ZestInputProps, ZestInputTitle, type ZestInputTitleProps, ZestLabel, type ZestLabelProps, ZestLinkButton, type ZestLinkButtonProps, ZestModal, ZestModalBody, ZestModalFooter, ZestModalHeader, type ZestModalProps, ZestSelector, type ZestSelectorProps, ZestSpin, type ZestSpinProps, ZestTable, type ZestTableColumn, type ZestTableExpandable, type ZestTablePagination, type ZestTableProps, type ZestTableRowSelection, ZestTabs, type ZestTabsProps, ZestText, type ZestTextProps, ZestTitle, type ZestTitleProps, ZestToggleButton, useAlert };
