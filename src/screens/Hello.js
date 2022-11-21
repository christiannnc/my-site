import React, { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import TechnicalSkills from "../components/TechnicalSkills";
import "../css/hello.css";

export default function Hello() {
    const [cursorVisible, setCursorVisible] = useState(true);

    /*useEffect(() => {
        setTimeout(() => {
            setCursorVisible(!cursorVisible);
        }, 500);
    }, [cursorVisible]);*/

    return (
        <div>
            <Navbar />
            <div className="welcome-div">
                <h1 className="cc-hello-header">Hello, I'm Christian</h1>
            </div>
            <About />
            <TechnicalSkills />
            <Resume />
            <Contact />
        </div>
    );
}
