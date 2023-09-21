import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.lejhro.com/innovations" target="_blank">Innovations</a>
              </li>
              <li>
                <a href="https://www.lejhro.com/business-services" target="_blank">Business Services</a>
              </li>
              <li>
                <a href="https://www.lejhro.com/financial-services" target="_blank">Financial Services</a>
              </li>
              <li>
                <a href="https://www.recruit.lejhro.com/" target="_blank">Lejhro Recruiter</a>
              </li>
              <li>
                <a href="https://www.lejhro.com/about" target="_blank">About</a>
              </li>
              <li>
                <a href="https://www.lejhro.com/blogs" target="_blank">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Program</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.bootcamp.lejhro.com/" target="_blank">
                  Lejhro Bootcamp
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.lejhro.com/contact-us" target="_blank">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://www.lejhro.com/terms-of-use" target="_blank">
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://www.lejhro.com/privacy-statement"
                  target="_blank"
                >
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Connect with Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faSkype} className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
