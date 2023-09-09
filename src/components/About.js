import React from "react";
import "../css/about.css";
import headshot from "../assets/images/portrait.jpg";
import resume from "../assets/christian_cox_resume.pdf";

export default function About() {
    const interests = [
        "Machine Learning & AI",
        "Cloud Computing",
        "Cryptography",
        "Data Science",
    ];

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
                    <a className="resume-download-link" href={resume} download>
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

                <div className="about-description-details-container">
                    <p className="about-detailed condensed">
                        I'm an undergraduate at North Carolina State University
                        studying Economics and Computer Science.
                    </p>
                    <p className="about-detailed">
                        I chose economics because I am fascinated with the ways
                        consumers make decisions in the presence of scarcity.
                        This pairs well with computer science, which I fell in
                        love with after seeing how it allows me to craft
                        solutions to problems faced by others.
                    </p>
                </div>

                <div className="interests-container">
                    <h3>Areas of interest</h3>
                    <div className="interest-list">
                        {interests.map((interest) => (
                            <label className="interest">{interest}</label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
