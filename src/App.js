import { createContext, useEffect, useState } from "react";
import "./App.css";
import Hello from "./screens/Hello";

export const ThemeContext = createContext();

function App() {
    const storedTheme = JSON.parse(localStorage.getItem("theme") || false);
    const [isDarkMode, setIsDarkMode] = useState(storedTheme);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            <div className={!isDarkMode ? "body" : "body dark"}>
                <header className="App-header">
                    <Hello />
                </header>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
