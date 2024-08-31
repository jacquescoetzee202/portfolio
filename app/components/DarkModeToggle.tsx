import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DrakModeToggleProps {
    className? : string
}

export default function DarkModeToggle({className}: DrakModeToggleProps) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarMode = () => {
        setDarkMode(!darkMode);
    }
    // Set up dark light mode properly
    return (
        <button onClick={toggleDarMode} className={`flex items-center justify-center h-10 w-10 rounded-full ${className}`}>
            {darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}