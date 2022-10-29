import React from "react";
import {
  FaChess,
  FaItunesNote,
  FaSnowboarding,
  FaStackOverflow,
} from "react-icons/fa";
const Passions = () => {
  return (
    <div className="passions">
      <h3>Passions</h3>
      <div className="passions-content">
        <span>
          <FaChess />
          <span className="passions-details">Jeu d'échec</span>
        </span>
        <span>
          <FaItunesNote />
          <span className="passions-details">Piano</span>
        </span>
        <span>
          <FaSnowboarding />
          <span className="passions-details">Skateboard</span>
        </span>
        <span>
          <FaStackOverflow />
          <span className="passions-details">Développement informatique</span>
        </span>
        <span>
          <FaItunesNote />
          <span className="passions-details">Musique</span>
        </span>
      </div>
    </div>
  );
};

export default Passions;
