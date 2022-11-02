import React from "react";
import { FaHome } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h3>Contactez moi</h3>
        <div className="lineContact">
          <FaHome />
          <span>Nancy</span>
        </div>
        <div className="lineContact">
          <FaHome />
          <span>06 73 06 41 29</span>
        </div>
        <div className="lineContact">
          <FaHome />
          <span>theohelf@gmail.com</span>
        </div>
      </div>
      <div className="contact-footer">
        <div className="contact-reseau">
          <span>Linkdled</span>
          <FaHome />
        </div>
        <div className="contact-reseau">
          <span>Linkdled</span>
          <FaHome />
        </div>
      </div>
    </div>
  );
};

export default Contact;
