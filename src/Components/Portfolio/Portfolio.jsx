import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & financial Visualization",
    github: "https://github.com/Msenthil15796",
    demo: "https://dribbble.com/shots/16673715"
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in figma",
    github: "https://github.com/Msenthil15796",
    demo: "https://dribbble.com/shots/16580766"
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com/Msenthil15796",
    demo: "https://dribbble.com/shots/16955822"
  },
  {
    id: 3,
    image: IMG3,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com/Msenthil15796",
    demo: "https://dribbble.com/shots/17290917"
  },
  {
    id: 5,
    image: IMG5,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com/Msenthil15796",
    demo: "https://dribbble.com/shots/16541289"
  },
  {
    id: 6,
    image: IMG6,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com/Msenthil15796",
    demo: "https://dribbble.com/shots/15887665"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="p1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
