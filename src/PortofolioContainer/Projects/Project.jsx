import React from "react";
import { Button } from "react-bootstrap";
import "./project.css";

const Project = ({ name, img, link, description }) => {
  return (
    <div className="p">
      <div className="p-name">{name}</div>
      <img src={img} alt="" className="p-img" />

      <div className="p-description">{description}</div>
      <a href={link} target="_blank" rel="noreferrer">
        <Button variant="outline-dark" className="btn-app">See the app here</Button>
      </a>
    </div>
  );
};

export default Project;
