import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
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
            <TechnicalSkills />
        </div>
    );
}
