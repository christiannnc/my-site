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

                <div className="resume-container">
                    <a
                        className="resume-download-link"
                        href="../assets/resume.pdf"
                        download
                    >
                        Download resume
                    </a>
                </div>

                <div className="about-description-container">
                    <span className="about-tag">{"<about>"}</span>
                    <span className="about-description">
                        I like to build things that solve problems
                    </span>
                    <span className="about-tag">{"</about>"}</span>
                </div>
            </div>
        </div>
    );
}
