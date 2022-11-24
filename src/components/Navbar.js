import React, { useContext, useState } from "react";
import "../css/navbar.css";
import NavbarTabs from "../components/NavbarTabs";
import menuIcon from "../assets/images/hamburger-menu.svg";
import menuIconDark from "../assets/images/hamburger-menu-dark.svg";
import darkMode from "../assets/images/dark-mode.svg";
import lightMode from "../assets/images/light-mode.svg";
import logo from "../assets/images/logo.png";
import { ThemeContext } from "../App";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const context = useContext(ThemeContext);

    return (
        <div className="cc-navbar">
            <div className="cc-navbar-container">
                <div className="site-info-container">
                    <img src={logo} className="logo" />
                </div>

                <div className="hamburger-menu">
                    <button
                        className="theme-btn"
                        onClick={() =>
                            context.setIsDarkMode(!context.isDarkMode)
                        }
                    >
                        <img
                            className="theme-icon"
                            src={context.isDarkMode ? darkMode : lightMode}
                        />
                    </button>
                    <img
                        onClick={() => setMenuOpen(!menuOpen)}
                        src={context.isDarkMode ? menuIconDark : menuIcon}
                        className="hamburger-menu icon"
                    />
                </div>
            </div>

            {menuOpen ? <NavbarTabs close={setMenuOpen} /> : null}
        </div>
    );
}
