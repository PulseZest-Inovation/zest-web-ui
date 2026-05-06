# zest-web-ui

Production-ready React component library styled with **Tailwind CSS**.  
Ships with full TypeScript types, ESM + CommonJS builds, and zero runtime CSS — just Tailwind utility classes.

[![npm](https://img.shields.io/npm/v/zest-web-ui)](https://www.npmjs.com/package/zest-web-ui)
[![license](https://img.shields.io/npm/l/zest-web-ui)](LICENSE)

---

## Installation

```bash
npm install zest-web-ui
# or
yarn add zest-web-ui
# or
pnpm add zest-web-ui
```

### Tailwind CSS requirement

This library uses Tailwind CSS utility classes. Add the package to your `tailwind.config.js` content array so Tailwind can scan and include all used classes:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/zest-web-ui/dist/**/*.{js,cjs}", // ← add this
  ],
  theme: { extend: {} },
  plugins: [],
};
```

---

## Components

| Category | Components |
|---|---|
| **Table** | `ZestTable` |
| **Button** | `ZestButton`, `ZestIconButton`, `ZestFloatingButton`, `ZestToggleButton`, `ZestLinkButton` |
| **Input** | `ZestInput`, `ZestSelector` |
| **Modal** | `ZestModal`, `ZestModalHeader`, `ZestModalBody`, `ZestModalFooter` |
| **Text** | `ZestText`, `ZestTitle`, `ZestHeading`, `ZestLabel`, `ZestInputTitle`, `ZestBadge` |
| **Feedback** | `AlertProvider` (+ `useAlert` hook), `ZestSpin` |
| **Layout** | `ZestDivider`, `ZestTab` |

---

## ZestTable

The flagship component — a feature-rich data table inspired by Ant Design's Table.

### Basic usage

```tsx
import { ZestTable } from "zest-web-ui";

const columns = [
  { key: "name",  title: "Name",       sortable: true },
  { key: "email", title: "Email" },
  { key: "role",  title: "Role",       sortable: true },
  { key: "age",   title: "Age",        sortable: true, align: "right" },
];

const data = [
  { id: 1, name: "Alice",   email: "alice@example.com",   role: "Admin",  age: 28 },
  { id: 2, name: "Bob",     email: "bob@example.com",     role: "Editor", age: 34 },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer", age: 22 },
];

export default function App() {
  return (
    <ZestTable
      columns={columns}
      data={data}
      rowKey="id"
    />
  );
}
```

---

### Sorting

Add `sortable: true` to any column. For non-string values supply a `sortValue` extractor:

```tsx
const columns = [
  {
    key: "createdAt",
    title: "Created",
    sortable: true,
    sortValue: (row) => new Date(row.createdAt),
    render: (value) => new Date(value).toLocaleDateString(),
  },
  {
    key: "score",
    title: "Score",
    sortable: true,
    sortValue: (row) => row.score, // number — uses numeric sort automatically
  },
];
```

Control the initial sort:

```tsx
<ZestTable
  columns={columns}
  data={data}
  defaultSortKey="score"
  defaultSortOrder="desc"
/>
```

---

### Pagination

Pagination is enabled by default (10 rows/page). Customise with the `pagination` prop or disable entirely:

```tsx
// Custom page size + page-size changer dropdown
<ZestTable
  columns={columns}
  data={data}
  pagination={{
    pageSize: 20,
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 50, 100],
    showTotal: (total, [from, to]) => `${from}–${to} of ${total} records`,
  }}
/>

// Show all rows — no pagination
<ZestTable columns={columns} data={data} pagination={false} />
```

---

### Row selection

```tsx
import { useState } from "react";
import { ZestTable } from "zest-web-ui";

export default function SelectionDemo() {
  const [selectedKeys, setSelectedKeys] = useState<number[]>([]);

  return (
    <ZestTable
      columns={columns}
      data={data}
      rowKey="id"
      rowSelection={{
        selectedRowKeys: selectedKeys,
        onChange: (keys) => setSelectedKeys(keys as number[]),
        // disable specific rows:
        getCheckboxProps: (row) => ({ disabled: row.role === "Admin" }),
      }}
    />
  );
}
```

Use `type: "radio"` for single-row selection:

```tsx
rowSelection={{ type: "radio", onChange: (keys, rows) => console.log(rows[0]) }}
```

---

### Column filters

```tsx
const columns = [
  {
    key: "role",
    title: "Role",
    filters: [
      { text: "Admin",  value: "Admin" },
      { text: "Editor", value: "Editor" },
      { text: "Viewer", value: "Viewer" },
    ],
    // optional custom logic — defaults to strict equality
    onFilter: (value, row) => row.role === value,
  },
  {
    key: "age",
    title: "Age",
    filters: [
      { text: "Under 30", value: "young" },
      { text: "30 and over", value: "senior" },
    ],
    filterMultiple: false, // single-select filter
    onFilter: (value, row) =>
      value === "young" ? row.age < 30 : row.age >= 30,
  },
];
```

---

### Global search

```tsx
<ZestTable
  columns={columns}
  data={data}
  searchable
  searchPlaceholder="Search users…"
/>
```

Search scans every column's raw cell value (before `render`).

---

### Expandable rows

```tsx
<ZestTable
  columns={columns}
  data={data}
  expandable={{
    expandedRowRender: (row) => (
      <div className="p-4 text-sm text-gray-600">
        <p>Email: {row.email}</p>
        <p>Joined: {row.joinedAt}</p>
      </div>
    ),
    rowExpandable: (row) => row.role !== "Admin",
  }}
/>
```

Controlled expand state:

```tsx
const [expandedKeys, setExpandedKeys] = useState<number[]>([]);

<ZestTable
  expandable={{
    expandedRowRender: (row) => <p>{row.bio}</p>,
    expandedRowKeys: expandedKeys,
    onExpand: (expanded, row) =>
      setExpandedKeys((prev) =>
        expanded ? [...prev, row.id] : prev.filter((k) => k !== row.id)
      ),
  }}
/>
```

---

### Loading state

```tsx
const [loading, setLoading] = useState(false);

<ZestTable columns={columns} data={data} loading={loading} />
```

---

### Appearance

```tsx
// Size
<ZestTable size="small" />   // compact
<ZestTable size="middle" />  // default
<ZestTable size="large" />   // spacious

// Borders between cells
<ZestTable bordered />

// Alternating row colour
<ZestTable striped />
```

---

### Row click handler

```tsx
<ZestTable
  columns={columns}
  data={data}
  onRow={(row) => ({
    onClick: () => router.push(`/users/${row.id}`),
    className: "hover:bg-indigo-50",
  })}
/>
```

---

### Custom render

The `render` function receives `(cellValue, row, rowIndex)`:

```tsx
const columns = [
  {
    key: "status",
    title: "Status",
    render: (value) => (
      <span
        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
          value === "active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-600"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "actions",
    title: "Actions",
    render: (_, row) => (
      <button onClick={() => handleDelete(row.id)} className="text-red-500 text-sm">
        Delete
      </button>
    ),
  },
];
```

---

### Summary row

```tsx
<ZestTable
  columns={columns}
  data={data}
  summary={(rows) => (
    <>
      <td className="px-4 py-2 text-sm font-semibold">Total</td>
      <td />
      <td className="px-4 py-2 text-sm font-semibold text-right">
        {rows.reduce((sum, r) => sum + r.amount, 0).toLocaleString()}
      </td>
    </>
  )}
/>
```

---

### CSV export

```tsx
<ZestTable
  columns={columns}
  data={data}
  exportCsv
  exportFilename="users-report"
/>
```

Exports the current filtered + sorted dataset (not just the visible page).

---

### Horizontal / vertical scroll

```tsx
// Fixed height with sticky header
<ZestTable scroll={{ y: 400 }} columns={columns} data={data} />

// Horizontal scroll for wide tables
<ZestTable scroll={{ x: 1200 }} columns={columns} data={data} />
```

---

### Table title & footer

```tsx
<ZestTable
  title={() => <h3 className="text-base font-semibold">User List</h3>}
  footer={() => <span>Last updated: just now</span>}
  columns={columns}
  data={data}
/>
```

---

### Full prop reference — ZestTable

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `ZestTableColumn[]` | — | Column definitions (required) |
| `data` | `T[]` | — | Row data (required) |
| `rowKey` | `string \| (row) => string \| number` | row index | Unique key per row |
| `className` | `string` | `""` | Extra CSS classes on the wrapper |
| `rowsPerPage` | `number` | `10` | Default page size |
| `pagination` | `ZestTablePagination \| false` | default | Pagination config or `false` to disable |
| `defaultSortKey` | `string` | `""` | Initially sorted column |
| `defaultSortOrder` | `"asc" \| "desc"` | `"asc"` | Initial sort direction |
| `loading` | `boolean` | `false` | Show spinner overlay |
| `rowSelection` | `ZestTableRowSelection` | — | Checkbox / radio row selection |
| `expandable` | `ZestTableExpandable` | — | Expandable row config |
| `size` | `"small" \| "middle" \| "large"` | `"middle"` | Cell padding density |
| `bordered` | `boolean` | `false` | Cell borders |
| `striped` | `boolean` | `false` | Alternating row colour |
| `onRow` | `(row, idx) => { onClick?, onDoubleClick?, className? }` | — | Per-row event/class overrides |
| `emptyText` | `ReactNode` | `"No data available"` | Empty state content |
| `searchable` | `boolean` | `false` | Show global search input |
| `searchPlaceholder` | `string` | `"Search…"` | Search input placeholder |
| `summary` | `(data) => ReactNode` | — | Summary / footer row inside `<tfoot>` |
| `scroll` | `{ x?, y? }` | — | Scroll boundaries |
| `title` | `() => ReactNode` | — | Table card title |
| `footer` | `() => ReactNode` | — | Table card footer |
| `exportCsv` | `boolean` | `false` | Show CSV export button |
| `exportFilename` | `string` | `"table-data"` | CSV download filename |

#### ZestTableColumn props

| Prop | Type | Description |
|---|---|---|
| `key` | `string` | Column identifier (also used as default `dataIndex`) |
| `title` | `ReactNode` | Column header |
| `dataIndex` | `string` | Row field to read (defaults to `key`) |
| `render` | `(value, row, index) => ReactNode` | Custom cell renderer |
| `sortable` | `boolean` | Enable sorting |
| `sortValue` | `(row) => string \| number \| Date \| null` | Custom sort extractor |
| `width` | `number \| string` | Column width |
| `align` | `"left" \| "center" \| "right"` | Cell text alignment |
| `filters` | `{ text, value }[]` | Filter options |
| `onFilter` | `(value, row) => boolean` | Custom filter logic |
| `filterMultiple` | `boolean` | Allow multi-select filters (default: `true`) |
| `ellipsis` | `boolean` | Truncate overflowing text |

---

## Other components

### ZestButton

```tsx
import { ZestButton } from "zest-web-ui";

<ZestButton variant="primary" onClick={handleSave}>Save</ZestButton>
<ZestButton variant="outline" loading={saving}>Saving…</ZestButton>
<ZestButton variant="ghost">Cancel</ZestButton>
```

### ZestInput

```tsx
import { ZestInput } from "zest-web-ui";

<ZestInput placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
```

### ZestSelector

```tsx
import { ZestSelector } from "zest-web-ui";

<ZestSelector
  options={[
    { label: "Admin",  value: "admin" },
    { label: "Editor", value: "editor" },
  ]}
  value={role}
  onChange={setRole}
  placeholder="Pick a role"
/>
```

### ZestModal

```tsx
import { ZestModal, ZestModalHeader, ZestModalBody, ZestModalFooter, ZestButton } from "zest-web-ui";

<ZestModal open={open} onClose={() => setOpen(false)} size="md">
  <ZestModalHeader>Confirm delete</ZestModalHeader>
  <ZestModalBody>Are you sure you want to delete this record?</ZestModalBody>
  <ZestModalFooter>
    <ZestButton variant="ghost" onClick={() => setOpen(false)}>Cancel</ZestButton>
    <ZestButton variant="primary" onClick={handleDelete}>Delete</ZestButton>
  </ZestModalFooter>
</ZestModal>
```

### AlertProvider + useAlert

```tsx
// Wrap your app
import { AlertProvider } from "zest-web-ui";
<AlertProvider><App /></AlertProvider>

// Inside any component
import { useAlert } from "zest-web-ui";
const { showAlert } = useAlert();
showAlert({ message: "Saved!", type: "success", duration: 3000 });
```

### ZestSpin

```tsx
import { ZestSpin } from "zest-web-ui";

<ZestSpin size={32} color="#3b82f6" />
```

### ZestTab

```tsx
import { ZestTab } from "zest-web-ui";

<ZestTab
  tabs={[
    { label: "Overview", content: <Overview /> },
    { label: "Settings", content: <Settings /> },
  ]}
/>
```

---

## Contributing

1. Clone: `git clone https://github.com/PulseZest-Inovation/zest-web-ui`
2. Install: `npm install`
3. Develop: `npm run dev`
4. Build: `npm run build`

Issues and PRs are welcome at [github.com/PulseZest-Inovation/zest-web-ui/issues](https://github.com/PulseZest-Inovation/zest-web-ui/issues).

---

## Publishing to npm

```bash
npm run build
npm publish
```

> Make sure you're logged in: `npm login`  
> The package is configured for public access automatically.

---

## License

MIT © [PulseZest Innovation](https://github.com/PulseZest-Inovation)
