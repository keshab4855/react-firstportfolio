import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div class="contactpage" id="contact">
      <div class="hero herocontact">
        <h1>CONTACT ME</h1>
      </div>
      <div class="navbar contactmenav">
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

      <ul class="socialiconbox">
        <li class="socialicon">
          <i class="fa-brands fa-facebook"></i>
        </li>
        <li class="socialicon">
          <i class="fa-brands fa-twitter"></i>
        </li>
        <li class="socialicon">
          <i class="fa-brands fa-instagram"></i>
        </li>
        <li class="socialicon">
          <i class="fa-brands fa-linkedin"></i>
        </li>
        <li class="socialicon">
          <i class="fa-brands fa-solid fa-envelope"></i>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
