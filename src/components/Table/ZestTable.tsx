"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

// ─── Column definition ────────────────────────────────────────────────────────

export interface ZestTableColumn<T = any> {
  /** Unique identifier for the column */
  key: string;
  /** Column header label */
  title: React.ReactNode;
  /** Field name to read from each row (defaults to `key`) */
  dataIndex?: string;
  /** Custom cell renderer: (cellValue, row, rowIndex) => ReactNode */
  render?: (value: any, row: T, index: number) => React.ReactNode;
  /** Enable client-side sorting on this column */
  sortable?: boolean;
  /** Custom value extractor used for sorting */
  sortValue?: (row: T) => string | number | Date | null | undefined;
  /** Fixed column width (px number or CSS string) */
  width?: number | string;
  /** Text alignment inside cells */
  align?: "left" | "center" | "right";
  /** Filter options shown in the column header dropdown */
  filters?: { text: string; value: string | number | boolean }[];
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

// ─── Row selection ────────────────────────────────────────────────────────────

export interface ZestTableRowSelection<T = any> {
  /** Controlled list of selected row keys */
  selectedRowKeys?: (string | number)[];
  /** Fires when selection changes */
  onChange?: (keys: (string | number)[], rows: T[]) => void;
  /** Per-row checkbox props, e.g. `{ disabled: true }` */
  getCheckboxProps?: (row: T) => { disabled?: boolean };
  /** "checkbox" (default) or "radio" */
  type?: "checkbox" | "radio";
}

// ─── Expandable rows ──────────────────────────────────────────────────────────

export interface ZestTableExpandable<T = any> {
  /** Content rendered below a row when it is expanded */
  expandedRowRender: (row: T, index: number) => React.ReactNode;
  /** Return false to hide the expand toggle for a specific row */
  rowExpandable?: (row: T) => boolean;
  /** Keys expanded by default (uncontrolled) */
  defaultExpandedRowKeys?: (string | number)[];
  /** Controlled expanded keys */
  expandedRowKeys?: (string | number)[];
  /** Fires when a row is expanded or collapsed */
  onExpand?: (expanded: boolean, row: T) => void;
}

// ─── Pagination config ────────────────────────────────────────────────────────

export interface ZestTablePagination {
  /** Rows per page */
  pageSize?: number;
  /** Show a page-size selector dropdown */
  showSizeChanger?: boolean;
  /** Options for the page-size selector (default: [10, 20, 50, 100]) */
  pageSizeOptions?: number[];
  /** Custom total label: (total, [from, to]) => ReactNode */
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
}

// ─── Main props ───────────────────────────────────────────────────────────────

export interface ZestTableProps<T = any> {
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

  // ── Pagination ──────────────────────────────────────────────────────────────
  /** Default rows per page when `pagination` is not provided (default: 10) */
  rowsPerPage?: number;
  /**
   * Pagination config. Pass `false` to disable pagination entirely and show all
   * rows at once.
   */
  pagination?: ZestTablePagination | false;

  // ── Sorting ─────────────────────────────────────────────────────────────────
  /** Column key that is sorted by default */
  defaultSortKey?: string;
  /** Default sort direction (default: "asc") */
  defaultSortOrder?: "asc" | "desc";

  // ── Loading ─────────────────────────────────────────────────────────────────
  /** Show a loading spinner overlay */
  loading?: boolean;

  // ── Row selection ────────────────────────────────────────────────────────────
  rowSelection?: ZestTableRowSelection<T>;

  // ── Expandable rows ──────────────────────────────────────────────────────────
  expandable?: ZestTableExpandable<T>;

  // ── Appearance ───────────────────────────────────────────────────────────────
  /** Cell density: "small" | "middle" (default) | "large" */
  size?: "small" | "middle" | "large";
  /** Add borders between cells and columns */
  bordered?: boolean;
  /** Alternate row background colour */
  striped?: boolean;

  // ── Row behaviour ────────────────────────────────────────────────────────────
  /**
   * Per-row event/class override.
   * Example: `onRow={(row) => ({ onClick: () => console.log(row) })}`
   */
  onRow?: (
    row: T,
    index: number
  ) => { onClick?: () => void; onDoubleClick?: () => void; className?: string };

  // ── Empty state ───────────────────────────────────────────────────────────────
  /** Content shown when `data` is empty (default: "No data available") */
  emptyText?: React.ReactNode;

  // ── Global search ─────────────────────────────────────────────────────────────
  /** Show a global search box above the table */
  searchable?: boolean;
  /** Placeholder text for the search box */
  searchPlaceholder?: string;

  // ── Summary row ───────────────────────────────────────────────────────────────
  /**
   * Render a summary / footer row inside `<tfoot>`.
   * Receives the full (filtered + sorted) dataset.
   */
  summary?: (data: T[]) => React.ReactNode;

  // ── Scroll ────────────────────────────────────────────────────────────────────
  /** Horizontal / vertical scroll boundaries */
  scroll?: { x?: number | string; y?: number | string };

  // ── Table title / footer ──────────────────────────────────────────────────────
  /** Content rendered above the table (inside the card) */
  title?: () => React.ReactNode;
  /** Content rendered below the table body (inside the card) */
  footer?: () => React.ReactNode;

  // ── CSV export ────────────────────────────────────────────────────────────────
  /** Show an "Export CSV" button in the toolbar */
  exportCsv?: boolean;
  /** File name for the downloaded CSV (without extension, default: "table-data") */
  exportFilename?: string;
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

type SortOrder = "asc" | "desc";

const SIZE_PADDING: Record<"small" | "middle" | "large", string> = {
  small: "px-3 py-1.5",
  middle: "px-4 py-3",
  large: "px-5 py-4",
};

function getRowKey<T>(
  row: T,
  rowKey: ZestTableProps<T>["rowKey"],
  idx: number
): string | number {
  if (!rowKey) return idx;
  if (typeof rowKey === "function") return rowKey(row);
  return (row as any)[rowKey] ?? idx;
}

function getCellValue<T>(row: T, col: ZestTableColumn<T>): any {
  return (row as any)[col.dataIndex ?? col.key];
}

// ─── Filter dropdown ──────────────────────────────────────────────────────────

interface FilterDropdownProps {
  filters: { text: string; value: string | number | boolean }[];
  activeValues: (string | number | boolean)[];
  multiple: boolean;
  onApply: (values: (string | number | boolean)[]) => void;
  onReset: () => void;
}

function FilterDropdown({
  filters,
  activeValues,
  multiple,
  onApply,
  onReset,
}: FilterDropdownProps) {
  const [selected, setSelected] = useState<(string | number | boolean)[]>(activeValues);

  const toggle = (value: string | number | boolean) => {
    if (multiple) {
      setSelected((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    } else {
      setSelected((prev) => (prev.includes(value) ? [] : [value]));
    }
  };

  return (
    <div
      className="absolute z-50 top-full left-0 mt-1 min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="max-h-52 overflow-y-auto p-2 space-y-0.5">
        {filters.map((f) => (
          <label
            key={String(f.value)}
            className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-700/60"
          >
            <input
              type={multiple ? "checkbox" : "radio"}
              checked={selected.includes(f.value)}
              onChange={() => toggle(f.value)}
              className="accent-blue-500 h-3.5 w-3.5"
            />
            <span className="select-none">{f.text}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between border-t border-gray-100 px-2 py-1.5 gap-2 dark:border-gray-700">
        <button
          onClick={() => {
            setSelected([]);
            onReset();
          }}
          className="text-xs text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          Reset
        </button>
        <button
          onClick={() => onApply(selected)}
          className="rounded bg-blue-500 px-2.5 py-1 text-xs text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          OK
        </button>
      </div>
    </div>
  );
}

// ─── Loading spinner ──────────────────────────────────────────────────────────

function TableSpinner() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-[1px] rounded-xl dark:bg-gray-900/70">
      <svg
        className="h-8 w-8 animate-spin text-blue-500 dark:text-blue-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
    </div>
  );
}

// ─── ZestTable ────────────────────────────────────────────────────────────────

export function ZestTable<T = any>({
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
  searchPlaceholder = "Search…",
  summary,
  scroll,
  title,
  footer,
  exportCsv = false,
  exportFilename = "table-data",
}: ZestTableProps<T>) {
  // ── Sort ────────────────────────────────────────────────────────────────────
  const [sortKey, setSortKey] = useState<string>(defaultSortKey);
  const [sortOrder, setSortOrder] = useState<SortOrder>(defaultSortOrder);

  // ── Page ────────────────────────────────────────────────────────────────────
  const defaultPageSize =
    pagination !== false ? (pagination?.pageSize ?? rowsPerPage) : rowsPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  const [activePageSize, setActivePageSize] = useState(defaultPageSize);

  // ── Search ──────────────────────────────────────────────────────────────────
  const [searchText, setSearchText] = useState("");

  // ── Filters ─────────────────────────────────────────────────────────────────
  const [activeFilters, setActiveFilters] = useState<
    Record<string, (string | number | boolean)[]>
  >({});
  const [openFilterKey, setOpenFilterKey] = useState<string | null>(null);

  // ── Selection ───────────────────────────────────────────────────────────────
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<
    (string | number)[]
  >(rowSelection?.selectedRowKeys ?? []);
  const selectedKeys = rowSelection?.selectedRowKeys ?? internalSelectedKeys;

  // ── Expand ──────────────────────────────────────────────────────────────────
  const [expandedKeys, setExpandedKeys] = useState<(string | number)[]>(
    expandable?.defaultExpandedRowKeys ?? []
  );
  const effectiveExpandedKeys =
    expandable?.expandedRowKeys ?? expandedKeys;

  // Close filter dropdown on outside click
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpenFilterKey(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // ── Filtered data ────────────────────────────────────────────────────────────
  const filteredData = useMemo(() => {
    let result = [...data];

    if (searchable && searchText.trim()) {
      const lower = searchText.trim().toLowerCase();
      result = result.filter((row) =>
        columns.some((col) => {
          const val = getCellValue(row, col);
          return val != null && String(val).toLowerCase().includes(lower);
        })
      );
    }

    Object.entries(activeFilters).forEach(([colKey, values]) => {
      if (!values.length) return;
      const col = columns.find((c) => c.key === colKey);
      if (!col) return;
      result = result.filter((row) =>
        col.onFilter
          ? values.some((v) => col.onFilter!(v, row))
          : values.includes(getCellValue(row, col) as any)
      );
    });

    return result;
  }, [data, searchText, searchable, activeFilters, columns]);

  // ── Sorted data ──────────────────────────────────────────────────────────────
  const sortedData = useMemo(() => {
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
        return sortOrder === "asc"
          ? va.getTime() - vb.getTime()
          : vb.getTime() - va.getTime();

      const as = String(va).toLowerCase();
      const bs = String(vb).toLowerCase();
      return sortOrder === "asc" ? as.localeCompare(bs) : bs.localeCompare(as);
    });
  }, [filteredData, sortKey, sortOrder, columns]);

  // ── Pagination ───────────────────────────────────────────────────────────────
  const showPagination = pagination !== false;
  const paginationConfig: ZestTablePagination | undefined =
    pagination !== false ? pagination : undefined;
  const totalPages = Math.ceil(sortedData.length / activePageSize);

  const paginatedData = useMemo(() => {
    if (!showPagination) return sortedData;
    const start = (currentPage - 1) * activePageSize;
    return sortedData.slice(start, start + activePageSize);
  }, [sortedData, currentPage, activePageSize, showPagination]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, activeFilters]);

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const handleSort = (key: string, sortable?: boolean) => {
    if (!sortable) return;
    if (sortKey === key) {
      setSortOrder((p) => (p === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  const updateSelection = (next: (string | number)[]) => {
    const nextRows = data.filter((row, i) =>
      next.includes(getRowKey(row, rowKey, i))
    );
    rowSelection?.onChange?.(next, nextRows);
    setInternalSelectedKeys(next);
  };

  const handleSelectAll = () => {
    const pageKeys = paginatedData.map((row, idx) =>
      getRowKey(row, rowKey, (currentPage - 1) * activePageSize + idx)
    );
    const allSelected = pageKeys.every((k) => selectedKeys.includes(k));
    updateSelection(
      allSelected
        ? selectedKeys.filter((k) => !pageKeys.includes(k))
        : [...new Set([...selectedKeys, ...pageKeys])]
    );
  };

  const handleSelectRow = (row: T, absoluteIdx: number) => {
    const key = getRowKey(row, rowKey, absoluteIdx);
    if (rowSelection?.type === "radio") {
      updateSelection([key]);
    } else {
      updateSelection(
        selectedKeys.includes(key)
          ? selectedKeys.filter((k) => k !== key)
          : [...selectedKeys, key]
      );
    }
  };

  const handleExpand = (row: T, key: string | number) => {
    const isExpanded = effectiveExpandedKeys.includes(key);
    expandable?.onExpand?.(!isExpanded, row);
    if (!expandable?.expandedRowKeys) {
      setExpandedKeys((prev) =>
        isExpanded ? prev.filter((k) => k !== key) : [...prev, key]
      );
    }
  };

  const handleFilterApply = (
    colKey: string,
    values: (string | number | boolean)[]
  ) => {
    setActiveFilters((prev) => ({ ...prev, [colKey]: values }));
    setOpenFilterKey(null);
  };

  const handleFilterReset = (colKey: string) => {
    setActiveFilters((prev) => ({ ...prev, [colKey]: [] }));
    setOpenFilterKey(null);
  };

  const handleExportCsv = () => {
    const header = columns.map((c) => `"${String(c.title)}"`).join(",");
    const rows = sortedData.map((row) =>
      columns
        .map((col) => {
          const raw = getCellValue(row, col);
          return `"${raw != null ? String(raw).replace(/"/g, '""') : ""}"`;
        })
        .join(",")
    );
    const blob = new Blob([[header, ...rows].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportFilename}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Derived UI values ─────────────────────────────────────────────────────────
  const cellPad = SIZE_PADDING[size];
  const hasSelect = !!rowSelection;
  const hasExpand = !!expandable;

  const allPageSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row, idx) =>
      selectedKeys.includes(
        getRowKey(row, rowKey, (currentPage - 1) * activePageSize + idx)
      )
    );
  const somePageSelected =
    !allPageSelected &&
    paginatedData.some((row, idx) =>
      selectedKeys.includes(
        getRowKey(row, rowKey, (currentPage - 1) * activePageSize + idx)
      )
    );

  const pageSizeOptions = paginationConfig?.pageSizeOptions ?? [10, 20, 50, 100];
  const showSizeChanger = paginationConfig?.showSizeChanger ?? false;

  const startEntry =
    sortedData.length === 0 ? 0 : (currentPage - 1) * activePageSize + 1;
  const endEntry = Math.min(currentPage * activePageSize, sortedData.length);

  const tableStyle: React.CSSProperties = {};
  if (scroll?.x) tableStyle.minWidth = scroll.x;

  // ── Sort icon ─────────────────────────────────────────────────────────────────
  const sortIcon = (key: string, sortable?: boolean) => {
    if (!sortable) return null;
    if (sortKey !== key)
      return (
        <span className="opacity-30 text-[11px] dark:opacity-40">
          ↕
        </span>
      );
    return (
      <span className="text-blue-500 text-[11px] dark:text-blue-400">
        {sortOrder === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  // ── Page number buttons ───────────────────────────────────────────────────────
  const pageButtons = () => {
    if (totalPages <= 1) return null;
    const pages: (number | "…")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("…");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      )
        pages.push(i);
      if (currentPage < totalPages - 2) pages.push("…");
      pages.push(totalPages);
    }

    return pages.map((p, i) =>
      p === "…" ? (
        <span key={`ellipsis-${i}`} className="px-1 text-gray-400 text-sm dark:text-gray-500">
          …
        </span>
      ) : (
        <button
          key={p}
          onClick={() => setCurrentPage(p as number)}
          className={`min-w-[30px] rounded px-2 py-1 text-sm font-medium transition-colors ${
            currentPage === p
              ? "bg-blue-500 text-white shadow-sm dark:bg-blue-600"
              : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {p}
        </button>
      )
    );
  };

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div ref={wrapperRef} className={`flex flex-col gap-0 ${className}`}>
      {/* ── Toolbar ─────────────────────────────────────────────────────────── */}
      {(searchable || exportCsv) && (
        <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            {searchable && (
              <div className="relative">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="rounded-lg border border-gray-200 bg-white pl-3 pr-7 py-1.5 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 w-52 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
                />
                {searchText && (
                  <button
                    onClick={() => setSearchText("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-base leading-none dark:text-gray-500 dark:hover:text-gray-300"
                  >
                    ×
                  </button>
                )}
              </div>
            )}
            {exportCsv && (
              <button
                onClick={handleExportCsv}
                className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                ↓ Export CSV
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Card ────────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
        {loading && <TableSpinner />}

        {/* Optional table title */}
        {title && (
          <div className="border-b border-gray-100 px-4 py-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-200">
            {title()}
          </div>
        )}

        {/* Scroll container */}
        <div
          className="w-full overflow-x-auto"
          style={scroll?.y ? { maxHeight: scroll.y, overflowY: "auto" } : undefined}
        >
          <table
            className={`w-full border-collapse ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`}
            style={tableStyle}
          >
            {/* ── Head ──────────────────────────────────────────────────────── */}
            <thead className="sticky top-0 z-[1] bg-gray-50 dark:bg-gray-800">
              <tr>
                {hasExpand && (
                  <th
                    className={`${cellPad} w-10 border-b border-gray-200 dark:border-gray-700 ${
                      bordered ? "border-r border-gray-200 dark:border-gray-700" : ""
                    }`}
                  />
                )}

                {hasSelect && (
                  <th
                    className={`${cellPad} w-10 text-center border-b border-gray-200 dark:border-gray-700 ${
                      bordered ? "border-r border-gray-200 dark:border-gray-700" : ""
                    }`}
                  >
                    {rowSelection?.type !== "radio" && (
                      <input
                        type="checkbox"
                        checked={allPageSelected}
                        ref={(el) => {
                          if (el) el.indeterminate = somePageSelected;
                        }}
                        onChange={handleSelectAll}
                        className="accent-blue-500 h-4 w-4 cursor-pointer"
                      />
                    )}
                  </th>
                )}

                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key, col.sortable)}
                    style={{ width: col.width, textAlign: col.align ?? "left" }}
                    className={`border-b border-gray-200 dark:border-gray-700 ${cellPad} text-sm font-semibold text-gray-600 whitespace-nowrap select-none dark:text-gray-400 ${
                      col.sortable
                        ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        : ""
                    } ${bordered ? "border-r border-gray-200 dark:border-gray-700 last:border-r-0" : ""}`}
                  >
                    <div className="relative flex items-center gap-1">
                      <span>{col.title}</span>
                      {sortIcon(col.key, col.sortable)}

                      {col.filters && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenFilterKey(
                              openFilterKey === col.key ? null : col.key
                            );
                          }}
                          className={`ml-auto text-xs rounded px-1 py-0.5 transition-colors ${
                            activeFilters[col.key]?.length
                              ? "text-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400"
                              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-700"
                          }`}
                        >
                          ▼
                        </button>
                      )}

                      {openFilterKey === col.key && col.filters && (
                        <FilterDropdown
                          filters={col.filters}
                          activeValues={activeFilters[col.key] ?? []}
                          multiple={col.filterMultiple !== false}
                          onApply={(vals) => handleFilterApply(col.key, vals)}
                          onReset={() => handleFilterReset(col.key)}
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* ── Body ──────────────────────────────────────────────────────── */}
            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={
                      columns.length +
                      (hasSelect ? 1 : 0) +
                      (hasExpand ? 1 : 0)
                    }
                    className="px-4 py-14 text-center text-sm text-gray-400 dark:text-gray-500"
                  >
                    {emptyText}
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, idx) => {
                  const absoluteIdx =
                    (currentPage - 1) * activePageSize + idx;
                  const key = getRowKey(row, rowKey, absoluteIdx);
                  const isSelected = selectedKeys.includes(key);
                  const isExpanded = effectiveExpandedKeys.includes(key);
                  const rowProps = onRow?.(row, absoluteIdx);
                  const canExpand =
                    hasExpand &&
                    (expandable!.rowExpandable
                      ? expandable!.rowExpandable(row)
                      : true);
                  const checkboxDisabled =
                    rowSelection?.getCheckboxProps?.(row)?.disabled ?? false;

                  let rowBg = "bg-white dark:bg-gray-900";
                  if (isSelected) rowBg = "bg-blue-50 dark:bg-blue-900/30";
                  else if (striped && idx % 2 === 1) rowBg = "bg-gray-50/70 dark:bg-gray-800/50";

                  return (
                    <React.Fragment key={key}>
                      <tr
                        onClick={rowProps?.onClick}
                        onDoubleClick={rowProps?.onDoubleClick}
                        className={`border-b border-gray-100 transition-colors dark:border-gray-800 ${rowBg} ${
                          rowProps?.onClick ? "cursor-pointer" : ""
                        } hover:bg-blue-50/40 dark:hover:bg-blue-900/20 ${rowProps?.className ?? ""}`}
                      >
                        {/* Expand toggle */}
                        {hasExpand && (
                          <td
                            className={`${cellPad} text-center ${
                              bordered ? "border-r border-gray-100 dark:border-gray-800" : ""
                            }`}
                          >
                            {canExpand && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleExpand(row, key);
                                }}
                                style={{
                                  transform: isExpanded
                                    ? "rotate(90deg)"
                                    : "none",
                                  transition: "transform 0.15s",
                                  display: "inline-block",
                                }}
                                className="text-gray-400 hover:text-gray-600 text-xs leading-none dark:text-gray-500 dark:hover:text-gray-300"
                              >
                                ▶
                              </button>
                            )}
                          </td>
                        )}

                        {/* Checkbox / radio */}
                        {hasSelect && (
                          <td
                            className={`${cellPad} text-center ${
                              bordered ? "border-r border-gray-100 dark:border-gray-800" : ""
                            }`}
                          >
                            <input
                              type={
                                rowSelection?.type === "radio"
                                  ? "radio"
                                  : "checkbox"
                              }
                              checked={isSelected}
                              disabled={checkboxDisabled}
                              onChange={() =>
                                handleSelectRow(row, absoluteIdx)
                              }
                              onClick={(e) => e.stopPropagation()}
                              className="accent-blue-500 h-4 w-4 cursor-pointer disabled:cursor-not-allowed"
                            />
                          </td>
                        )}

                        {/* Data cells */}
                        {columns.map((col, colIdx) => {
                          const value = getCellValue(row, col);
                          return (
                            <td
                              key={col.key}
                              style={{
                                textAlign: col.align ?? "left",
                                width: col.width,
                              }}
                              className={`${cellPad} text-sm text-gray-700 align-middle dark:text-gray-200 ${
                                colIdx === 0 && !hasSelect ? "font-medium" : ""
                              } ${
                                col.ellipsis
                                  ? "max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                                  : "whitespace-nowrap"
                              } ${
                                bordered
                                  ? "border-r border-gray-100 last:border-r-0 dark:border-gray-800"
                                  : ""
                              }`}
                            >
                              {col.render
                                ? col.render(value, row, absoluteIdx)
                                : value}
                            </td>
                          );
                        })}
                      </tr>

                      {/* Expanded row content */}
                      {hasExpand && isExpanded && (
                        <tr className="bg-gray-50 dark:bg-gray-800">
                          <td
                            colSpan={
                              columns.length +
                              (hasSelect ? 1 : 0) +
                              1
                            }
                            className={`${cellPad} border-b border-gray-100 dark:border-gray-700 dark:text-gray-300`}
                          >
                            {expandable!.expandedRowRender(row, absoluteIdx)}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>

            {/* ── Summary ───────────────────────────────────────────────────── */}
            {summary && sortedData.length > 0 && (
              <tfoot>
                <tr className="bg-gray-50 font-medium dark:bg-gray-800 dark:text-gray-200">
                  {summary(sortedData)}
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* Optional table footer */}
        {footer && (
          <div className="border-t border-gray-100 px-4 py-2.5 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
            {footer()}
          </div>
        )}
      </div>

      {/* ── Pagination ──────────────────────────────────────────────────────── */}
      {showPagination && sortedData.length > 0 && (
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Entry info */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {paginationConfig?.showTotal ? (
              paginationConfig.showTotal(sortedData.length, [startEntry, endEntry])
            ) : (
              <>
                Showing{" "}
                <span className="font-medium text-gray-700 dark:text-gray-200">{startEntry}</span>
                {" – "}
                <span className="font-medium text-gray-700 dark:text-gray-200">{endEntry}</span> of{" "}
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {sortedData.length}
                </span>{" "}
                entries
                {selectedKeys.length > 0 && (
                  <span className="ml-2 text-blue-500 font-medium">
                    ({selectedKeys.length} selected)
                  </span>
                )}
              </>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {showSizeChanger && (
              <select
                value={activePageSize}
                onChange={(e) => {
                  setActivePageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-100 mr-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:focus:ring-blue-900/30"
              >
                {pageSizeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt} / page
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              «
            </button>
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className="rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ‹
            </button>

            {pageButtons()}

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              className="rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              ›
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages || totalPages === 0}
              className="rounded border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
