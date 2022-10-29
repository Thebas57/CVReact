import React, { useState } from "react";
import ProjectsList from "./Portfolio/ProjectsList";

const Projects = () => {
  const [isFilter, setIsFilter] = useState("javascript");

  const filters = [
    {
      id: 1,
      value: "javascript",
    },
    {
      id: 2,
      value: "react",
    },
    {
      id: 3,
      value: "css",
    },
  ];
  return (
    <div className="projects">
      <div className="projects-header">
        {filters.map((filter) => {
          return (
            <div key={filter.id} className="filter" onClick={(e) => setIsFilter(filter.value)}>
              <span
                className={
                  isFilter === filter.value ? "circle selected" : "circle"
                }
              ></span>
              <span key={filter.id} className="filter-info">
                {filter.value}
              </span>
            </div>
          );
        })}
      </div>
      <ProjectsList />
    </div>
  );
};

export default Projects;
