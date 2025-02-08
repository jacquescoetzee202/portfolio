import StockButton from "../StockButton";
import profileImage from "../../assets/jc_black_and_white.jpeg";

export default function Hero() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600">Hero Section</h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Jacques Coetzee</p>
                <p className="mt-6 text-lg/8 text-gray-600">Some text to support hero section</p>
                <div className="relative mt-6 mx-auto w-64 h-64">
                    <img src={profileImage} alt="Profile Image" className="rounded-full w-full h-full object-cover border-4 border-white absolute top-1 left-1 shadow-lg" />
                </div>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                <StockButton>About</StockButton>
                <StockButton>Contact</StockButton>
            </div>
        </div>  
    )
};