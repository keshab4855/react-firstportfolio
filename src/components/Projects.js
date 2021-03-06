import React from "react";
import { Link } from "react-router-dom";
import calculator from "../images/calculator.png";

const Projects = () => {
  return (
    <div>
      <div class="projectspage" id="project">
        <div class="hero heroproject">
          <h1>PROJECTS</h1>
        </div>
        <div class="navbar projectsnav">
          <div class="skills">
            <Link to="/">
              <h4>Home</h4>
            </Link>
          </div>
          <div class="skills">
            <Link to="/skills">
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
