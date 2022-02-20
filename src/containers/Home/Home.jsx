import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  // Handles click on the about button
  const linkAbout = () => {
    history.push(`/about-raman/about`);
  };

  // Handles click on the portfolio button
  const linkPortfolio = () => {
    history.push(`/about-raman/portfolio`);
  };

  return (
    <>
      <div className="home-spacer"></div>
      <div className="container mt-3 home">
        <div id="welcome-message">Seasoned Technology Leader, CISSP Certified Cyber Security Professional and a hands-on full-Stack Software Developer.</div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="mt-3 mb-3 ml-3">
              Learn More:
            </h2>
            <div className="row ml-3">
              <div
                className="col-5 home-buttons mr-1 text-center"
                onClick={linkAbout}
              >
                <p className="home-buttons-text">About me</p>{" "}
                <i className="fas fa-id-card fa-4x"></i>
              </div>
              <div
                className="col-5 home-buttons ml-1 text-center"
                onClick={linkPortfolio}
              >
                <p className="home-buttons-text">My Work</p>
                <i className="fas fa-tools fa-4x"></i>
              </div>
            </div>
            <h2 className="mx-3 my-3">Connect with me:</h2>
            <div className="row ml-3">
              <div className="connect-icons p-3">
                <a
                  href="https://github.com/ramantv"
                  target="_blank"
                  rel="noreferrer"
                  className="home-link"
                  aria-label="Link to Github"
                >
                  <i className="fab fa-github-square fa-5x mr-2"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/raman-trikkur/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-link"
                  aria-label="Link to LinkedIn"
                >
                  <i className="fab fa-linkedin fa-5x mr-2"></i>
                </a>
                <a
                  href="mailto:ramantv@outlook.com"
                  className="home-link"
                  aria-label="Email Link"
                >
                  <i className="fas fa-envelope-square fa-5x"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mt-3 mb-3 mx-3">Tools and Technologies:</h2>
            <div className="row icons p-2 d-flex justify-content-center mx-3">
              <i className="devicon-amazonwebservices-plain-wordmark devicon m-2" aria-label="AWS icon"></i>
              <i className="devicon-java-plain-wordmark devicon m-2" aria-label="Java icon"></i>
              <i className="devicon-spring-plain-wordmark devicon m-2" aria-label="Spring icon"></i>
              <i className="devicon-python-plain-wordmark devicon m-2" aria-label="Python icon"></i>
              <i className="devicon-c-plain-wordmark devicon m-2" aria-label="C icon"></i>
              <i className="devicon-cplusplus-plain-wordmark devicon m-2" aria-label="C++ icon"></i>
              <i className="devicon-linux-plain devicon m-2" aria-label="Linux icon"></i>
              <i className="devicon-docker-plain devicon m-2" aria-label="Docker icon"></i>
              <i className="devicon-mongodb-plain-wordmark devicon m-2" aria-label="MongoDB icon"></i>
              <i className="devicon-express-original devicon m-2" aria-label="Express icon"></i>
              <i className="devicon-react-original-wordmark devicon m-2" aria-label="React icon"></i>
              <i className="devicon-nodejs-plain devicon m-2" aria-label="Node.js icon"></i>
              <i className="devicon-javascript-plain devicon m-2" aria-label="JavaScript icon"></i>
              <i className="devicon-jquery-plain-wordmark devicon m-2" aria-label="jQuery icon"></i>
              <i className="devicon-html5-plain-wordmark devicon m-2" aria-label="HTML5 icon"></i>
              <i className="devicon-mysql-plain-wordmark devicon m-2" aria-label="MySQL icon"></i>
              <i className="devicon-handlebars-plain-wordmark devicon m-2" aria-label="Handlebars icon"></i>
              <i className="devicon-sequelize-plain-wordmark devicon m-2" aria-label="Sequelize icon"></i>
              <i className="devicon-bootstrap-plain-wordmark devicon m-2" aria-label="Bootstrap icon"></i>
              <i className="devicon-css3-plain-wordmark devicon m-2" aria-label="CSS3 icon"></i>
              <i className="devicon-git-plain-wordmark devicon m-2" aria-label="Git icon"></i>
              <i className="devicon-github-original-wordmark devicon m-2" aria-label="Github icon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
