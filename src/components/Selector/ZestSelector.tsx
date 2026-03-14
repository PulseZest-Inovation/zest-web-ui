export interface ZestSelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
  placeholder?: string;
  containerClassName?: string;
}

export const ZestSelector: React.FC<ZestSelectorProps> = ({
  options,
  placeholder = "Select Option",
  containerClassName = "",
  ...props
}) => (
  <div className={containerClassName}>
    <select
      {...props}
      className={`px-3 py-1.5 border w-80 border-gray-300 rounded-lg text-primary bg-primary focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
        props.className || ""
      }`}
      defaultValue=""
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);