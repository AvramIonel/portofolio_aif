import React from "react";
import { projects } from "../../data";
import Project from "../Projects/Project";
import "./personalProjects.css";

const PersonalProjects = () => {
  return (
    <div className="pp">
      <div className="pp-title">Projects</div>
      <div className="pp-project">
        {projects.map((item) => (
          <Project
            key={item.id}
            name={item.name}
            img={item.img}
            link={item.link}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
