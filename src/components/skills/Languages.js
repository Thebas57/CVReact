import React from "react";
import ProgressBar from "./ProgressBar";

const Languages = () => {

  const state = {
    languages : [
      {id:1, value:"HTML/CSS", xp:3},
      {id:2, value:"JS", xp:2.3},
      {id:3, value:"PHP", xp:3},
    ],
    frameworks: [
      {id:1, value:"Slim / twig", xp:1.8},
      {id:2, value:"NodeJS", xp:1.9},
      {id:3, value:"SCSS", xp:2},
      {id:4, value:"React (redux,...)", xp:1.5},
    ]
  }

  return (
    <div className="languages">
      <div className="lang">
        <h3>Langages informatiques</h3>
        <ProgressBar languages={state.languages} />
      </div>
      <div className="frameworks">
        <h3>Frameworks & Bibliotèques</h3>
        <ProgressBar languages={state.frameworks} />
      </div>
    </div>
  );
};

export default Languages;
