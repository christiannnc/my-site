import React, { useContext, useState } from "react";
import "../css/navbar.css";
import NavbarTabs from "../components/NavbarTabs";
import menuIcon from "../assets/images/hamburger_menu_rounded.png";
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
                        onClick={() =>
                            context.setIsDarkMode(!context.isDarkMode)
                        }
                    >
                        Dark mode
                    </button>
                    <img
                        onClick={() => setMenuOpen(!menuOpen)}
                        src={menuIcon}
                        className="hamburger-menu icon"
                    />
                </div>
            </div>

            {menuOpen ? <NavbarTabs close={setMenuOpen} /> : null}
        </div>
    );
}
