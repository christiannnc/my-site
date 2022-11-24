import { createContext, useEffect, useState } from "react";
import "./App.css";
import Hello from "./screens/Hello";

// will be used for multiple pages in the future
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
