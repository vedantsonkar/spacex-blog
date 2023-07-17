import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLElement>;
  link?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryButton({
  label,
  link,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const buttonClassname = disabled
    ? "bg-opacity-50 cursor-not-allowed mx-3 bg-grey border border-black text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
    : "mx-3 bg-white hover:bg-black hover:text-white border border-black text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 dark:invert";
  if (link) {
    return (
      <a
        href={link}
        className="mx-3 bg-white hover:bg-black hover:text-white border border-black text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 dark:invert"
        target="_blank"
      >
        {label}
      </a>
    );
  }
  return (
    <button
      className={buttonClassname}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
}
