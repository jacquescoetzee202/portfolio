import { PropsWithChildren } from "react";
import { Link } from "react-router";

interface StockButtonProps {
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  to?: string;
}

export default function StockButton({
  type,
  onClick,
  className,
  to,
  children,
}: PropsWithChildren<StockButtonProps>) {
  const sharedClasses = `group relative inline-block text-sm font-medium text-green-600 focus:outline-none focus:ring active:text-green-500 ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-green-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
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
