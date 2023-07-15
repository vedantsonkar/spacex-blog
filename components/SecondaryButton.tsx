interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function SecondaryButton({
  label,
  onClick,
  disabled = false,
}: ButtonProps) {
  const className = disabled
    ? "cursor-not-allowed mx-3 bg-grey text-black border border-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
    : "mx-3 bg-transparent text-black border border-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 dark:invert";
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
