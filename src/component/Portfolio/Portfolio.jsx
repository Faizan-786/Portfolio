import React from "react";
import "./portfolio.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p7.jpg";

const data = [
  {
    id: 1,
    image: p1,
    title: "Agricultural robot",
    github: "https://github.com",
    demo: "https://en.wikipedia.org/wiki/Agricultural_robot",
  },
  {
    id: 2,
    image: p2,
    title: "Closed ecological system",
    github: "https://github.com",
    demo: "https://en.wikipedia.org/wiki/Closed_ecological_system",
  },
  {
    id: 3,
    image: p3,
    title: "Cultured meat",
    github: "https://github.com",
    demo: "https://en.wikipedia.org/wiki/Cultured_meat",
  },
  {
    id: 4,
    image: p4,
    title: "Vertical farming",
    github: "https://github.com",
    demo: "https://en.wikipedia.org/wiki/Vertical_farming",
  },
  {
    id: 5,
    image: p5,
    title: "Active structure",
    github: "https://github.com",
    demo: "https://en.wikipedia.org/wiki/Active_structure",
  },
  {
    id: 6,
    image: p6,
    title: "Arcology",
    github: "https://github.com",
    demo: "https://en.wikipedia.org/wiki/Arcology",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5 className="portfolio-subtitle">My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={image} alt="" />
            </div>
            <h3 className="text-center">{title}</h3>
            <div className="portfolio_item_cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
