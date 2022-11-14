import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="home-header">
        <h1>Théo HELF</h1>
        <TrackVisibility>
          {({ isVisible }) => (
            <>
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <img className="img-react" src="./img/home.png" alt="react" />
              </div>
              <div className={isVisible ? "animate__animated animate__zoomIn balise" : "balise"}>
                <img className="img-balise" src="./img/balise2.jpg" alt="react" />
              </div>
            </>
          )}
        </TrackVisibility>
      </div>
      <h3>Développeur full-stack</h3>
      <a href="./cv/cv.pdf" download="CV Théo HELF">
        Télécharger mon CV
      </a>
    </div>
  );
};

export default Portfolio;
