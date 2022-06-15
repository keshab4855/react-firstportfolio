import React from "react";

const Skills = () => {
  return (
    <div>
      {" "}
      <div class="skillspage" id="skills">
        <div class="hero heroskills">
          <h1>SKILLS</h1>
        </div>
        <div class="navbar skillsnav">
          <div class="skills">
            <h4>Skills</h4>
          </div>
          <div class="projects">
            <h4>Projects</h4>
          </div>
          <div class="about-me">
            <h4>About me</h4>
          </div>
          <div class="contact">
            <h4>Contact</h4>
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
