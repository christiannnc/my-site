import React from 'react';
import '../../css/about.css';
import headshot from '../../assets/images/portrait.jpg';
import resume from '../../assets/christian_cox_resume.pdf';

const AboutSection = () => {
  const interests = [
    'Web & Mobile Development',
    'Cloud Computing',
    'Artificial Intelligence',
    'API Development',
  ];

  return (
    <div className="about-section">
      <div className="quote-container">
        <h1 className="about-quote">
          “Find a job you enjoy doing, and you will never have to work a day in
          your life.” ~ Mark Twain
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
          <span className="about-tag">{'<about>'}</span>
          <span className="about-description">
            I like to build things that solve problems
          </span>
          <span className="about-tag">{'</about>'}</span>
        </div>

        <div className="about-description-details-container">
          <p className="about-detailed condensed">
            I'm an undergraduate at North Carolina State University studying
            Economics with a minor in Computer Programming.
          </p>
          <p className="about-detailed">
            I chose economics because I am fascinated with the ways consumers
            make decisions in the presence of scarcity. This pairs well with
            computer programming, which I enjoy because it allows me to solve
            real-world problems.
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
};

export default AboutSection;
