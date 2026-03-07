export interface ZestTableColumn<T = any> {
  key: string;
  title: string;
  render?: (row: T, idx: number) => React.ReactNode;
}

export interface ZestTableProps<T = any> {
  columns: ZestTableColumn<T>[];
  data: T[];
  className?: string;
}


export function ZestTable<T = any>({ columns, data, className = "" }: ZestTableProps<T>) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-zinc-700 bg-blue-50 bg-primary text-primary dark:text-blue-100"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-4 text-center text-gray-400  bg-white dark:bg-zinc-900">No data</td>
            </tr>
          ) : (
            data.map((row, idx) => (
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
                    className={`px-4 py-2 border-b border-gray-100 bg-primary text-primary ${colIdx === 0 ? "font-medium text-gray-900 dark:text-blue-100" : "text-gray-700 dark:text-blue-200"
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