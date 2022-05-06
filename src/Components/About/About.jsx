import React from "react";
import "./about.css";
import Me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3.6+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Projects</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>3.6+ years Working</small>
            </article>
          </div>

          <p>
            A highly-creative, fast-learning and computer-literate individual
            with a Bachelor Degree B.E (ECE) and over 3.6+ years of experience
            User Interface Development, Responsive Web Design, Application
            Design, Developing valid cross-browser cross-functional Web
            Applications with a growing passion for opensource and Java Script
            Frameworks. My Technical skills are: I am proficient in Front End
            Development Technologies such as React JS, Redux, Node.js,
            JavaScript, jQuery, JEST, Cypress, HTML/HTML5, CSS/CSS3, Bootstrap,
            Material UI, Mongo db.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
