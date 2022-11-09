import React from "react";

const Experiences = () => {
  return (
    <div className="experiences">
      <h3>Experiences </h3>
      <div className="experiences-content">
        <div className="xp-content">
          <div>
            <div className="xp-header">
              <h4>CDI Chrono-Caisse - Nancy</h4>
              <span>2020 - 2022</span>
            </div>
            <p>
              - Ajout / amélioration de fonctionnalités sur l’application
              chrono-caisse. <br />
              - Développement et conception de plusieurs interfaces d’une api
              pour communiquer avec les différentes marketplaces. <br />-
              Support client / debug.
            </p>
          </div>
        </div>
        <div className="xp-content">
          <div>
            <div className="xp-header">
              <h4>Stage JUMO REGULATION - Nancy</h4>
              <span>2018 - 2019</span>
            </div>
            <p>
              - Amélioration de leur site internet et Développement de bases
              notes. <br />- Mise en ligne d'un catalogue stock sur leur site
            </p>
          </div>
        </div>
        <div className="xp-content">
          <div>
            <div className="xp-header">
              <h4>Emploi saisonnier - Laquenexy</h4>
              <span>Juillet 2018</span>
            </div>
            <p>- Entretien des espaces verts et des bâtiments communaux</p>
          </div>
        </div>
        <div className="xp-content">
          <div>
            <div className="xp-header">
              <h4>Projet innovant au lycée - Metz</h4>
              <span>Mai 2017</span>
            </div>
            <p>
              - Création d’un skate connecté
              <br />- Développement d’un site web
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
