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
  rowsPerPage = 10,
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
    if (sortKey !== key) return "↕";
    return sortOrder === "asc" ? "↑" : "↓";
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key, col.sortable)}
                className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-zinc-700"
                style={{ cursor: col.sortable ? "pointer" : "default" }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span>{col.title}</span>
                  <span>{getSortIndicator(col.key, col.sortable)}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-4 text-center">
                No data
              </td>
            </tr>
          ) : (
            paginatedData.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2 border-b border-gray-100">
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

      {sortedData.length > rowsPerPage && (
        <div className="flex items-center justify-between mt-4">
          <span>
            Page {currentPage} of {totalPages}
          </span>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
//usage example:
/*
const columns = [
  { key: "name", title: "Name", sortable: true },
  { key: "age", title: "Age", sortable: true },
  { key: "email", title: "Email" },
];

<ZestTable columns={columns} data={data} />

<ZestTable columns={columns} data={data} rowsPerPage={10} />

*/