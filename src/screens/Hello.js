import React, { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import TechnicalSkills from "../components/TechnicalSkills";
import "../css/hello.css";

export default function Hello() {
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        console.log("%chi there!", "color: #5AB1BB");
        console.log("if you're seeing this, you're probably a developer");
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
