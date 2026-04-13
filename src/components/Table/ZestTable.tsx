"use client";

import React, { useEffect, useMemo, useState } from "react";

export interface ZestTableColumn<T = any> {
  key: string;
  title: string;
  render?: (row: T, idx: number) => React.ReactNode;
  sortable?: boolean;
  sortValue?: (row: T) => string | number | Date | null | undefined;
}

export interface ZestTableProps<T = any> {
  columns: ZestTableColumn<T>[];
  data: T[];
  className?: string;
  rowsPerPage?: number;
}

type SortOrder = "asc" | "desc";

export function ZestTable<T = any>({
  columns,
  data,
  className = "",
  rowsPerPage = 7,
}: ZestTableProps<T>) {
  const [sortKey, setSortKey] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (key: string, sortable?: boolean) => {
    if (!sortable) return;

    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }

    setCurrentPage(1);
  };

  const sortedData = useMemo(() => {
    const copied = [...data];

    if (!sortKey) return copied;

    const column = columns.find((col) => col.key === sortKey);
    if (!column) return copied;

    copied.sort((a, b) => {
      const valueA = column.sortValue ? column.sortValue(a) : (a as any)[sortKey];
      const valueB = column.sortValue ? column.sortValue(b) : (b as any)[sortKey];

      if (valueA == null && valueB == null) return 0;
      if (valueA == null) return sortOrder === "asc" ? -1 : 1;
      if (valueB == null) return sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }

      if (valueA instanceof Date && valueB instanceof Date) {
        return sortOrder === "asc"
          ? valueA.getTime() - valueB.getTime()
          : valueB.getTime() - valueA.getTime();
      }

      const aStr = String(valueA).toLowerCase();
      const bStr = String(valueB).toLowerCase();

      return sortOrder === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });

    return copied;
  }, [data, columns, sortKey, sortOrder]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const getSortIndicator = (key: string, sortable?: boolean) => {
    if (!sortable) return null;
    if (sortKey !== key) return <span className="text-xs opacity-50">↕</span>;
    return (
      <span className="text-xs font-semibold">
        {sortOrder === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  return (
    <div
      className={`overflow-hidden rounded-xl border border-primary bg-primary text-primary shadow-sm ${className}`}
    >
      <div className="w-full overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse">
          <thead>
            <tr className="bg-primary">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key, col.sortable)}
                  className={`border-b border-primary px-4 py-3 text-left text-sm font-semibold text-primary sm:px-5 ${
                    col.sortable ? "cursor-pointer select-none" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{col.title}</span>
                    {getSortIndicator(col.key, col.sortable)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-10 text-center text-sm text-primary sm:px-5"
                >
                  No data available
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-primary bg-primary text-primary transition-colors hover:bg-primary"
                >
                  {columns.map((col, colIdx) => (
                    <td
                      key={col.key}
                      className={`px-4 py-4 text-sm align-middle text-primary sm:px-5 ${
                        colIdx === 0 ? "font-medium" : ""
                      }`}
                    >
                      {col.render
                        ? col.render(row, (currentPage - 1) * rowsPerPage + idx)
                        : (row as any)[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {sortedData.length > rowsPerPage && (
        <div className="flex flex-col gap-3 border-t border-primary px-4 py-3 text-primary sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-primary">
            Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
            {Math.min(currentPage * rowsPerPage, sortedData.length)} of{" "}
            {sortedData.length} entries
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="rounded-md border border-primary bg-primary px-3 py-1.5 text-sm font-medium text-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-sm text-primary">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className="rounded-md border border-primary bg-primary px-3 py-1.5 text-sm font-medium text-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}