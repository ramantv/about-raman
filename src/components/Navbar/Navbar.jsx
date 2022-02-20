import { Link } from "react-router-dom";
import {React, useContext} from "react";

import "./Navbar.css";
import resume from "../../files/rvt-resume-stub.pdf";
import SidebarContext from "../../contexts/SidebarContext";

const Header = () => {
  // Change sidebar display state (from context)
  const setSidebarDisplay = useContext(SidebarContext);

  // Handle click to close sidebar
  const openSidebar = () => {
    setSidebarDisplay(true);
  };

  return (
    <>
      <nav className="navbar navbar-expanded">
        <div className="col-4">
          <Link to="/" className="h3 mr-4">
            Home
          </Link>
          <Link to="/about" className="h3 mr-4">
            About
          </Link>
          <Link to="/portfolio" className="h3 mr-4">
            Portfolio
          </Link>
          <a href={resume} target="_blank" rel="noreferrer" className="h3">
            Resume
          </a>
        </div>
        <div className="col-4">
          <div className="row justify-content-center">
            <Link to="/" className="h1 font-weight-bold">
              Raman Trikkur
            </Link>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <a
            href="https://github.com/ramantv"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Github"
          >
            <i className="fab fa-github-square fa-3x mr-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/raman-trikkur/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to LinkedIn"
          >
            <i className="fab fa-linkedin fa-3x mr-2"></i>
          </a>
          <a href="mailto:ramantv@outlook.com" aria-label="Email Link">
            <i className="fas fa-envelope-square fa-3x"></i>
          </a>
        </div>
      </nav>
      <nav className="navbar navbar-collapse">
        <div className="col-1" id="open-menu">
          <i
            className="fas fa-bars fa-2x"
            id="hamburger-open"
            onClick={openSidebar}
          ></i>
        </div>
        <div className="col-10">
          <div className="row justify-content-center">
            <Link to="/" className="h1 font-weight-bold">
              Raman Trikkur
            </Link>
          </div>
        </div>
        <div className="col-1"></div>
      </nav>
    </>
  );
};

export default Header;
