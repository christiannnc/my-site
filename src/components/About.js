import React from "react";
import "../css/about.css";
import headshot from "../assets/images/headshot.jpg";

export default function About() {
    return (
        <div className="about-section">
            <div className="quote-container">
                <h1 className="about-quote">
                    “Find a job you enjoy doing, and you will never have to work
                    a day in your life.” ~ Mark Twain
                </h1>
            </div>

            <div className="about-content-container">
                <img className="headshot-img" src={headshot} />
                <label className="education-label">
                    Economics and Computer Science at North Carolina State
                    University
                </label>
            </div>
        </div>
    );
}
