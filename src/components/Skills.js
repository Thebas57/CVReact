import React from "react";
import Autres from "./skills/Autres";
import Experiences from "./skills/Experiences";
import Languages from "./skills/Languages";
import Passions from "./skills/Passions";

const Skills = () => {
  return (
    <div className="skills">
      <Languages />
      <Experiences />
      <Autres />
      <Passions />
    </div>
  );
};

export default Skills;
