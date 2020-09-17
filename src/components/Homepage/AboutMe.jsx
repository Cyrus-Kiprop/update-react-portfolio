import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

import "./AboutMe.css";

export default function AboutMe() {
  const languages = [
    "JavaScript (ES5, ES6)",
    "Ruby",
    "HTML5",
    "CSS3",
    "SASS",
    "SQL",
  ];
  const frameworks = [
    "Ruby on Rails",
    "React",
    "Styled components",
    "Node",
    "Express",
    "Bootstrap",
    "Styled Components",
    "Tailwind.css",
    "Animate.css",
  ];

  const testing = [
    "Rspec",
    "Shoulda-matcher",
    "Capybara",
    "Enzyme",
    "preact",
    "Jest",
    "Mocha",
  ];

  const databases = ["MongoDB", "SQlite", "Firebase", "Postgresql"];

  return (
    <section id="details" className="about-me">
      <h1 className="section_title">About me</h1>
      <p className="description">
        Hi, I am Cyrus, Nice to meet you! I have been a network engineer, worked
        as a teacher in a networking school and worked for a business owner, but
        I discovered that my real passion is software development. I now work as
        a freelancer as well as a running weekly Node meetups(Virtually). I am
        quite confident, naturally curious, and continuously working on
        improving my skills one piece at a time. If you like what you see and
        have project you need coded, don't hesitate to contact me.
      </p>
      <div className="overall-btn">
        <Link to="#">Get my resume</Link>
      </div>

      <div className="my-skills">
        <div className="skill-wrapper">
          <div className="skill-item">
            <h3 className="skill-title">Languages</h3>
            <ul>
              {languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div className="skill-wrapper">
          <div className="skill-item">
            <h3 className="skill-title">Frameworks</h3>
            <ul>
              {frameworks.map((frame) => (
                <li key={frame}>{frame}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="skill-wrapper">
          <div className="skill-item">
            <h3 className="skill-title">Testing</h3>
            <ul>
              {testing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="skill-wrapper">
          <div className="skill-item">
            <h3 className="skill-title">Databases</h3>
            <ul>
              {databases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h1 className="section_title">Interested in collaborating?</h1>
      <p className="description">
        If you have an application you are interested in developing, a feature
        that you need built or a project that need coding. I'd love to help you
        with it.
      </p>
    </section>
  );
}
