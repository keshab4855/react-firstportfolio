import React from "react";
import calculator from "../images/calculator.png";

const Projects = () => {
  return (
    <div>
      <div class="projectspage">
        <div class="hero heroproject">
          <h1>PROJECTS</h1>
        </div>
        <div class="navbar projectsnav">
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
        <div class="box1">
          <div class="imagebox">
            <img class="calculatorimg" src={calculator} alt="" srcset="" />
          </div>
          <div class="textbox">
            <h3>Prank Calculator</h3>
            <ul class="projects-lists">
              <li>Tech used: HTML, CSS, JAVASCRIPT</li>
              <li>This is prank Calculator used to prank people.</li>
              <li> adnka sakndsak dkasnk andasb sadnba ansbaj</li>

              <li> afjbajkbfja fejwkhf fjcsahdajk</li>
            </ul>
          </div>
        </div>
        <div class="box2">
          <div class="textbox">
            <h3>Portofolio website</h3>
            <ul>
              <li>Tech used: HTML, CSS, JAVASCRIPT</li>
              <li>This is prank Calculator used to prank people.</li>
              <li> adnka sakndsak dkasnk andasb sadnba ansbaj</li>

              <li> afjbajkbfja fjcsahdajk</li>
            </ul>
          </div>
          <div class="imagebox">
            <img class="calculatorimg" src={calculator} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
