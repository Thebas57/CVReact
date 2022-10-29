import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";

const Autres = () => {
  return (
    <div className="autres">
      <h3>D'autres compétences</h3>
      <div className="autres-content">
        <span>
          <FaRegCheckSquare />
          <span className="autres-details">Anglais B1</span>
        </span>
        <span>
          <FaRegCheckSquare />

          <span className="autres-details">Permis B</span>
        </span>
        <span>
          <FaRegCheckSquare />

          <span className="autres-details">Pack Office</span>
        </span>
        <span>
          <FaRegCheckSquare />

          <span className="autres-details">Github</span>
        </span>
        <span>
          <FaRegCheckSquare />

          <span className="autres-details">Autonome</span>
        </span>
        <span>
          <FaRegCheckSquare />

          <span className="autres-details">JE C PAS</span>
        </span>
        <span>
          <FaRegCheckSquare />
          <span className="autres-details">JE C PAS</span>
        </span>
        <span>
          <FaRegCheckSquare />
          <span className="autres-details">JE C PAS</span>
        </span>
      </div>
    </div>
  );
};

export default Autres;
