import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../../assets/lejhro_logo_blue.png";
import "./MainMenu.css";

function MainMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`main-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <div className="menu-logo">
            <img src={Logo} alt="Lejhro Blue Icon" height="40" />
          </div>
          <div className="menu-close-button" onClick={onClose}>
            X
          </div>
        </div>
        <ul className="menu-links">
          <li>
            <a href="https://www.lejhro.com/innovations" target="_blank">
              Innovations
            </a>
          </li>
          <li>
            <a href="https://www.bootcamp.lejhro.com/" target="_blank">
              Bootcamp
            </a>
          </li>
          <li>
            <a href="https://www.lejhro.com/business-services" target="_blank">
              Business Services
            </a>
          </li>
          <li>
            <a href="https://www.lejhro.com/financial-services" target="_blank">
              Financial Services
            </a>
          </li>
          <li>
            <a href="https://www.lejhro.com/about" target="_blank">
              About
            </a>
          </li>
          <li>
            <a href="https://www.lejhro.com/contact-us" target="_blank">
              Contact Us
            </a>
          </li>
          <li>
            <a href="https://www.lejhro.com/contact-us" target="_blank">
              Blogs
            </a>
          </li>
          <li className="social-icons-container">
            <a href="#">
              <FontAwesomeIcon icon={faSkype} className="social-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainMenu;
