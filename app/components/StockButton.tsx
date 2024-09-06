import { PropsWithChildren } from "react";
import { JSXSource } from "react/jsx-dev-runtime"

interface StockButtonProps {
    buttonType?: 'button' | 'submit'
    onclick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    className?: string
}

export default function StockButton({buttonType, onclick, className ,children}: PropsWithChildren<StockButtonProps>) {
    return (
        <button
            type={buttonType}
            onClick={onclick}
            className={`group relative inline-block text-sm font-medium text-green-600 focus:outline-none focus:ring active:text-green-500 ${className}`}
        >
            <span
                className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-green-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span className="relative block border border-current bg-white px-8 py-3">
                {children}
            </span>
        </button>
    );
}