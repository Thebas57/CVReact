import React from "react";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaMailBulk,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h3>Contactez moi</h3>
        <hr />
        <div className="lineContact">
          <FaLocationArrow />
          <span>Nancy</span>
        </div>
        <div className="lineContact">
          <FaPhoneAlt />
          <span>06 73 06 41 29</span>
        </div>
        <div className="lineContact">
          <FaMailBulk />
          <a href="mailto:email@example.com">theohelf@gmail.com</a>
        </div>
      </div>
      <div className="contact-footer">
        <div className="contact-reseau animate__animated animate__zoomIn">
          <span>Linkdled</span>
          <FaLinkedin />
        </div>
        <div className="contact-reseau animate__animated animate__zoomIn">
          <span>Github</span>
          <FaGithubSquare />
        </div>
      </div>
      <img src="./img/contact.svg" alt="contact" className=" animate__animated animate__zoomIn img-contact" />
    </div>
  );
};

export default Contact;
