import React from "react";
import techReact from "../../assets/AboutMe/tech.png";
import "./about.css";

const AboutMe = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-l-tech">
          <img src={techReact} alt="" className="a-l-img" />
        </div>
      </div>
      <div className="a-right">
        <h2>About Me</h2>
        <p className="a-description">
          Hello! My name is Ionel, I`m a 31 years old Front-End Developer from
          Oradea, pasionate for technology. I started learning JavaScript last
          year and since then I worked daily on expanding my knowledge. Now I
          use React for my projects, and I`m willing to learn more.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
