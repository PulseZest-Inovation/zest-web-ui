"use client";

import React, { useMemo, useState } from "react";

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
}

type SortOrder = "asc" | "desc";

export function ZestTable<T = any>({
  columns,
  data,
  className = "",
}: ZestTableProps<T>) {
  const [sortKey, setSortKey] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleSort = (key: string, sortable?: boolean) => {
    if (!sortable) return;

    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
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
                className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-zinc-700 bg-blue-50 bg-primary text-primary dark:text-blue-100"
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
          {sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-4 text-center text-gray-400 bg-white dark:bg-zinc-900"
              >
                No data
              </td>
            </tr>
          ) : (
            sortedData.map((row, idx) => (
              <tr
                key={idx}
                className={
                  idx % 2 === 0
                    ? "bg-white dark:bg-zinc-900"
                    : "bg-blue-50 dark:bg-zinc-800"
                }
              >
                {columns.map((col, colIdx) => (
                  <td
                    key={col.key}
                    className={`px-4 py-2 border-b border-gray-100 bg-primary text-primary ${
                      colIdx === 0
                        ? "font-medium text-gray-900 dark:text-blue-100"
                        : "text-gray-700 dark:text-blue-200"
                    }`}
                  >
                    {col.render ? col.render(row, idx) : (row as any)[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
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