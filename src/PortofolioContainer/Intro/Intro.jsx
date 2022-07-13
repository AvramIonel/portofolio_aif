import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import "./intro.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Intro = () => {
  return (
    <div className="i-container">
      <div className="i-parent">
        <div className="i-details">
          <div className="i-media">
            <div className="i-media-icons">
              <a
                href="https://github.com/AvramIonel"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
              <a
                href="https://www.linkedin.com/in/ionel-florin-avram-94a2715b"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </a>
            </div>
          </div>
          <div className="i-details-name">
            <span className="primary-text">
              {/* {""} */}
              Hello, I'm <span className="highlighted-text">Ionel</span>
            </span>
          </div>
          <div className="i-detail-role">
            <span className="primary-text">
              {/* {""} */}
              <h1>
                {/* {""} */}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer  👨‍💻",
                    1000,
                    "FrontEnd Developer  💻",
                    1000,
                    "React Developer 💎",
                    2000,
                  ]}
                />
              </h1>
              <span className="i-role-tagline">
                I belive that the future will bring all of us closer to
                technology, I want to be part of it and work on building it.
              </span>
            </span>
          </div>
          <div className="i-options">
            {/* <Button variant="secondary" className="contact-btn">
              Contact Me
            </Button> */}
            <a href="Avram_Ionel-Florin.pdf" download="Avram Ionel.pdf">
              <Button variant="danger" className="highlighted-btn">
                Get Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="i-picture">
          <div className="i-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
