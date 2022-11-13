import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div>
      {" "}
      <div class="skillspage" id="skills">
        <div class="hero heroskills">
          <h1>SKILLS</h1>
        </div>
        <div class="navbar skillsnav">
          <div class="projects">
            <Link to="/">
              <h4>Home</h4>
            </Link>
          </div>
          <div class="skills">
            <Link to="/Skills">
              <h4>Skills</h4>
            </Link>
          </div>
          <div class="projects">
            <Link to="/project">
              <h4>Projects</h4>
            </Link>
          </div>
          <div class="about-me">
            <Link to="/about">
              <h4>About me</h4>
            </Link>
          </div>
          <div class="contact">
            <Link to="/contact">
              {" "}
              <h4>Contact</h4>
            </Link>
          </div>
        </div>
        <div class="iconbox">
          <div class="icon bootstrap">
            <i class="fa-brands fa-bootstrap"></i>
          </div>
          <div class="icon nodejs">
            <i class="fa-brands fa-node"></i>
          </div>
          <div class="icon js">
            <i class="fa-brands fa-js"></i>
          </div>
          <div class="icon database">
            <i class="fa-brands fas fa-database"></i>
          </div>
          <div class="icon react">
            <i class="fa-brands fa-react"></i>
          </div>
          <div class="icon sass">
            <i class="fa-brands fa-sass"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
