import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="progressBar">
      <div className="progressBar-header">
        <span>Années d'experience</span>
        <span>1</span>
        <span>2</span>
        <span>3+</span>
      </div>
      <div className="progressBar-content">
        {props.languages?.map((language) => {
          const year = 3;
          const progressBar = (language.xp / year) * 100 + "%";

          return (
            <div key={language.id} className="languages-list">
              <span>{language.value}</span>
              <div
                className="progressBar-list"
                style={{ width: progressBar }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
