import React from "react";
import Main from "../../components/Main/Main";
import "./About.css";
import circleImage from "../../images/raman-pp.png";

import trailWalk from "../../images/walk_with_rafa_and_son.jpg";
import myBuddy from "../../images/Rafa_my_loyal_buddy.jpg";
import tinkeringWithCode from "../../images/Working_on_my_react_portfolio_website.jpg";
import tennisAtCincy from "../../images/Watching_Tennis_Masters_Cincy.jpg";

const About = () => {
  const title = "About Me";
  const circleImageAlt = "Headshot of Raman Trikkur";
  const aboutContent = (
    <div>
      <div className="row px-3">
        <div className="col">
          <p>
            My name is Raman Trikkur. I am a seasoned Technology Executive and a
            CyberSecurity leader who has held several leadership roles in the
            Information Security and Software Development domains. Presently I
            am a Senior Manager, Application Security at{" "}
            <strong>AON corporation</strong>, where I lead Application Security
            initiatives for the $50B company.
          </p>
          <p>
            In my previous role, I led the <em>Application Security</em> team at{" "}
            <strong>Amazon.com</strong> for their Marketplace organization which
            enables 3rd party selling on Amazon. Prior to that I led a
            Professional Services team at <strong>Broadcom / CA Inc</strong> for{" "}
            <strong>CA Inc</strong>’s Security SaaS services. I have delivered
            Application Security and Identity Management services for large
            enterprise customers. I’ve had responsibility for a variety of
            Security functions over the course of my career – including{" "}
            <em>
              Identity and Access Management, Application Security, Threat
              Modeling, Blue Teaming, Penetration Testing,
            </em>{" "}
            and <em>Bug Bounty Programs</em>. I have solid grounding in{" "}
            <em>Security protocols, Encryption, Cryptography,</em> and thorough
            technical understanding of
            <em>Authentication (AuthN) and Authorization (AuthZ)</em> and
            technologies:{" "}
            <em>
              {" "}
              Multi-Factor Authentication, Single Sign-On, SAML, OAuth 2, OpenID
              Connect and FIDO2.
            </em>
          </p>
          <p>
            I also founded and ran an independent CyberSecurity Consulting firm,{" "}
            <strong>Red Ribbon Security</strong> which performed Security
            Assessments, Penetration Testing and DevOps Security projects for
            small and medium-sized businesses.
          </p>
          <p>
            I have a strong <strong>software development</strong> background as
            well. I love to tinker with code, I am comfortable with several
            programming languages like{" "}
            <em>
              Java, C/C++. Python and the modern web-development stacks
              including Javascript, Node.js, React, MySQL, Sequelize, Mongo DB,
              Mongoose ODM, HTML5 and CSS
            </em>
            . I have built many software components for previous employers
            including <strong>GE, Sprint, JP Morgan Chase and Broadcom</strong>.
            I hold a <strong>Master’s Degree in Computer Science</strong> from
            University of Kerala in India and an <strong>MBA</strong> from the
            University of Kansas.
          </p>
          <p>
            In my spare time I love to play Tennis. I also coach a little
            Tennis, to my son and other kids in the neighborhood. I enjoy going
            on long walks with Rafa (my black Lab). I love to travel,
            particularly like to visit the great National Parks in America and
            around the world. I also enjoy reading and occasionally like to
            experiment in the kitchen with different recipes and subjecting my
            family to the results of my experiments.😊
          </p>
        </div>
      </div>
      <div className="row justify-content-center" id="picture-list">
        <figure>
          <img src={trailWalk} alt="Long Walk" width="500" height="700" />
          <figcaption>
            Walking the trails with Rafa and my son Shreyas.
          </figcaption>
        </figure>
        <figure>
          <img src={myBuddy} alt="My Buddy" width="500" height="700" />
          <figcaption>Rafa, my loyal buddy</figcaption>
        </figure>
        <figure>
          <img
            src={tinkeringWithCode}
            alt="Tinkering with Code"
            width="500"
            height="700"
          />
          <figcaption>Working on this React based Portfolio website</figcaption>
        </figure>
        <figure>
          <img
            src={tennisAtCincy}
            alt="Tennis, my recreation"
            width="500"
            height="700"
          />
          <figcaption>At Cincinatti Tennis Master's</figcaption>
        </figure>
      </div>
    </div>
  );

  return (
    <Main
      circleImage={circleImage}
      circleImageAlt={circleImageAlt}
      content={aboutContent}
      title={title}
    />
  );
};

export default About;
