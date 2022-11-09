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
  //Fonction qui renvoie vers les reseaux
  const handleReseau = (reseau) => {
    if (reseau === "github") {
      window.open("https://github.com/Thebas57", "_blank");
    }
  };
  return (
    <div className="navbar">
      <div className="header-nav">
        <img src="./img/moi.webp" alt="img-moi" />
        <span>Théo HELF</span>
      </div>
      <div className="navigation">
        <ul>
          <NavLink
            exact
            to="/"
            className="navlink"
            activeClassName="activ-navlink"
          >
            <li>
              <FaHome />
              <span>Accueil</span>
            </li>
          </NavLink>
          <NavLink
            exact
            to="skills"
            className="navlink"
            activeClassName="activ-navlink"
          >
            <li>
              <FaStackOverflow />
              <span>Compétences</span>
            </li>
          </NavLink>
          <NavLink
            exact
            to="projects"
            className="navlink"
            activeClassName="activ-navlink"
          >
            <li>
              <FaIdCard />
              <span>Portfolio</span>
            </li>
          </NavLink>
          <NavLink
            exact
            to="contact"
            className="navlink"
            activeClassName="activ-navlink"
          >
            <li>
              <FaMailBulk />
              <span>Contact</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="reseau">
        <ul>
          <li>
            <FaLinkedin />
          </li>
          <li onClick={(e) => handleReseau("github")}>
            <FaGithubSquare />
          </li>
        </ul>
      </div>
      <div className="footer-nav">From me - 2022</div>
    </div>
  );
};

export default Navbar;
