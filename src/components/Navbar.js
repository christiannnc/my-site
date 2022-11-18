import React, { useState } from "react";
import "../css/navbar.css";
import BurgerMenu from "./BurgerMenu";
import NavbarTabs from "../components/NavbarTabs";
import menuIcon from "../assets/images/hamburger_menu_rounded.png";
import logo from "../assets/images/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="cc-navbar">
            <div className="cc-navbar-container">
                <div className="site-info-container">
                    <img src={logo} className="logo" />
                </div>

                <div className="hamburger-menu">
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
