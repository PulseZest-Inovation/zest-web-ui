export interface ZestSpinProps {
  size?: number; // px
  color?: string;
  className?: string;
}

export const ZestSpin: React.FC<ZestSpinProps> = ({ size = 24, color = '#2563eb', className = '' }) => (
  <span
    className={`inline-block animate-spin ${className}`}
    style={{ width: size, height: size }}
    aria-label="Loading"
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke={color}
        strokeWidth="5"
        strokeDasharray="31.4 31.4"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke={color}
        strokeWidth="5"
        strokeDasharray="31.4 31.4"
        strokeDashoffset="15.7"
        strokeLinecap="round"
      />
    </svg>
  </span>
);
