import React from "react";
import { projectsData } from "../../data/projects";
import Project from "./Project";

const ProjectsList = ({ prop }) => {
  return (
    <div className="projects-list">
      {projectsData
        .filter((project) => project.languages.includes(prop))
        .map((project) => {
          return <Project prop={project} />;
        })}
    </div>
  );
};

export default ProjectsList;
