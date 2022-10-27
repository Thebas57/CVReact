import React from "react";
import {
  FaHome,
  FaStackOverflow,
  FaIdCard,
  FaMailBulk,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header-nav">
        <img src="./img/moi.webp" alt="img-moi" />
        <span>Théo HELF</span>
      </div>
      <div className="navigation">
        <ul>
          <NavLink exact to="/" className="navlink" activeClassName="activ-navlink">
            <li>
              <FaHome />
              <span>Accueil</span>
            </li>
          </NavLink>
          <NavLink exact to="skills" className="navlink" activeClassName="activ-navlink">
            <li>
              <FaStackOverflow />
              <span>Compétences</span>
            </li>
          </NavLink>
          <li>
            <FaIdCard />
            <span>Portfolio</span>
          </li>
          <li>
            <FaMailBulk />
            <span>Contact</span>
          </li>
        </ul>
      </div>
      <div className="reseau">
        <ul>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithubSquare />
          </li>
        </ul>
      </div>
      <div className="footer-nav">From me - 2022</div>
    </div>
  );
};

export default Navbar;
