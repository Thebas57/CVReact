import React from "react";
import { projectsData } from "../../data/projects";
import Project from "./Project";

const ProjectsList = () => {
  return (
    <div className="projects-list">
      {projectsData.map((project) => {
        return <Project prop={project} />;
      })}
    </div>
  );
};

export default ProjectsList;
