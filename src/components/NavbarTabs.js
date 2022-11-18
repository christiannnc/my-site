import React from "react";
import "../css/navbar.css";

export default function NavbarTabs({ close }) {
    return (
        <div className="tabs-container">
            <div onClick={() => close(false)} className="close-navbar">
                X
            </div>

            <div className="nav-tab">
                <a
                    className="nav-link"
                    href="https://github.com/christiannnc"
                    target={"_blank"}
                >
                    github
                </a>
            </div>

            <div className="nav-tab">
                <a
                    className="nav-link"
                    href="https://linkedin.com/in/christian-cox-aa8095191/"
                    target={"_blank"}
                >
                    linkedin
                </a>
            </div>

            <div className="nav-tab">
                <a
                    className="nav-link"
                    href="https://twitter.com/christiannnc_"
                    target={"_blank"}
                >
                    twitter
                </a>
            </div>

            <div className="nav-tab">
                <a
                    className="nav-link"
                    href="mailto:christian.m.cox@outlook.com"
                    target={"_blank"}
                >
                    email
                </a>
            </div>
        </div>
    );
}
