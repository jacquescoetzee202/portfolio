import StockButton from "../StockButton";

export default function Hero() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600">Hero Section</h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Jacques Coetzee</p>
                <p className="mt-6 text-lg/8 text-gray-600">Some text to support hero section</p>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                <StockButton>About</StockButton>
                <StockButton>Contact</StockButton>
            </div>
        </div>  
    )
};