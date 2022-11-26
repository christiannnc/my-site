import React, { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import TechnicalSkills from "../components/TechnicalSkills";
import "../css/hello.css";

export default function Hello() {
    useEffect(() => {
        console.log(
            "%chi there!",
            "color: #5AB1BB; font-size: 20px; font-weight: 600"
        );
        console.log("if you're seeing this, you're probably a developer");
        console.log("");
        console.log(
            "%ci hope to be a developer one day too :)",
            "font-weight: 600"
        );
        console.log("");
        console.log(
            "if you'd like, feel free to email me at christian@christianmcox.com " +
                "to let me know what you think about this site, or what i could improve on!"
        );
    }, []);

    return (
        <div>
            <Navbar />
            <div className="welcome-div">
                <h1 className="cc-hello-header">Hello, I'm Christian</h1>
            </div>
            <About />
            <TechnicalSkills />
            <Contact />
        </div>
    );
}
