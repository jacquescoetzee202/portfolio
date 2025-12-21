import { PropsWithChildren } from "react";
import { Link } from "react-router";

interface StockButtonProps {
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  to?: string;
  variant?: "primary" | "secondary";
}

export default function StockButton({
  type,
  onClick,
  className,
  to,
  variant = "primary",
  children,
}: PropsWithChildren<StockButtonProps>) {
  const variantClasses = variant === "primary"
    ? "text-green-600 active:text-green-500"
    : "text-gray-600 active:text-gray-500";

  const backgroundClasses = variant === "primary"
    ? "bg-green-600"
    : "bg-gray-600";

  const sharedClasses = `group relative inline-block text-sm font-medium ${variantClasses} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
    variant === "primary" ? "focus-visible:ring-green-600" : "focus-visible:ring-gray-600"
  } ${className}`;

  const content = (
    <>
      <span className={`absolute inset-0 translate-x-0.5 translate-y-0.5 ${backgroundClasses} transition-transform group-hover:translate-x-0 group-hover:translate-y-0`}></span>
      <span className="relative block border border-current bg-white px-8 py-3">
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} type={type} className={`text-center ${sharedClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={sharedClasses}
    >
      {content}
    </button>
  );
}
