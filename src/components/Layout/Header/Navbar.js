import React, { useState } from "react";
import MainMenu from "../others/MainMenu";
import "./Navbar.css";
import Logo from "../../../assets/lejhro_logo_white.png";
import MenuLogo from "../../../assets/menu icon.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="navbar">
        <div className="container">
          <a
            className="navbar-brand"
            href="https://www.lejhro.com/"
            target="_blank"
          >
            <img
              src={Logo}
              alt="Lejhro Blue Logo"
              height="30"
              className="img-logo"
            />
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item-hide">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.lejhro.com/contact-us"
                target="_blank"
                style={{color: 'whitesmoke'}}
              >
                Innovations
              </a>
            </li>
            <li className="nav-item-hide">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.lejhro.com/contact-us"
                target="_blank"
                style={{color: 'whitesmoke'}}
              >
                Business Services
              </a>
            </li>
            <li className="nav-item-hide">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.lejhro.com/contact-us"
                target="_blank"
                style={{color: 'whitesmoke'}}
              >
                Financial Services
              </a>
            </li>
            <li className="nav-item-hide">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.lejhro.com/contact-us"
                target="_blank"
                style={{color: 'whitesmoke'}}
              >
                Bootcamp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu" onClick={toggleMenu}>
                <img
                  src={MenuLogo}
                  alt="MenuLogo"
                  height="30"
                  className="menu-icon"
                  style={{borderRadius: '50%'}}
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <MainMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      </div>
      <span className="blogs-header">
        <h1 className="header-text">Blogs</h1>
      </span>
    </div>
  );
}

export default App;
