import { createContext, useState } from "react";
import "./App.css";
import Hello from "./screens/Hello";

export const ThemeContext = createContext();

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

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
