import React, { useState } from "react";
import { FaPlusCircle, FaJsSquare, FaCss3, FaReact } from "react-icons/fa";

const Project = ({ prop }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="project-card">
      <div className="project-header-logo">
        {prop.languages.map((language) => {
          if (language === "javascript") return <FaJsSquare key={language}/>;
          else if (language === "css") return <FaCss3 key={language}/>;
          else if (language === "react") return <FaReact key={language}/>;
          else return null;
        })}
      </div>
      <div className="project-header-titre">{prop.name}</div>
      <div className="project-img">
        <img src={prop.picture} alt="projectimg" />
      </div>
      <div className="project-footer" onClick={(e) => setShowInfo(!showInfo)}>
        <FaPlusCircle />
      </div>
      {showInfo && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{prop.name}</h2>
              <div className="sourceCode">
                <a
                  href={prop.source}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  Code source
                </a>
              </div>
            </div>
            <p className="text">{prop.info}</p>
            <div
              className="button return"
              onClick={(e) => setShowInfo(!showInfo)}
            >
              <span>Retour</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
