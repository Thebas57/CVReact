import React from "react";
import { FaPlusCircle, FaJsSquare, FaCss3, FaReact } from "react-icons/fa";

const Project = ({ prop }) => {
  console.log(prop);
  return (
    <div className="project-card">
      <div className="project-header-logo">
        {prop.languages.map((language) => {
          if (language === "javascript") return <FaJsSquare />;
          else if(language==="css") return <FaCss3/>
          else if(language==="react") return <FaReact/>
          else return null;
        })}
      </div>
      <div className="project-header-titre">{prop.name}</div>
      <div className="project-img">
        <img src={prop.picture} alt="projectimg" />
      </div>
      <div className="project-footer">
        <FaPlusCircle />
      </div>
    </div>
  );
};

export default Project;
