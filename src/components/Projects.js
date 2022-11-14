import React, { useState } from "react";
import ProjectsList from "./Portfolio/ProjectsList";

const Projects = () => {
  const [isFilter, setIsFilter] = useState("javascript");

  const filters = [
    {
      id: 1,
      value: "javascript",
      name : "Javascript"
    },
    {
      id: 2,
      value: "react",
      name : "React"
    },
    {
      id: 3,
      value: "css",
      name : "Css"
    },
  ];
  return (
    <div className="projects">
      <div className="projects-header">
        {filters.map((filter) => {
          return (
            <div
              key={filter.id}
              className="filter"
              onClick={(e) => setIsFilter(filter.value)}
            >
              <span
                className={
                  isFilter === filter.value ? "circle selected" : "circle"
                }
              ></span>
              <span key={filter.id} className="filter-info">
                {filter.name}
              </span>
            </div>
          );
        })}
      </div>
      <ProjectsList prop={isFilter} />
    </div>
  );
};

export default Projects;
