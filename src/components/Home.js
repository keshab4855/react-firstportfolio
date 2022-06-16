import React from "react";
import image1 from "../images/image1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="introduction">
        <div class="hero">
          <img class="headerimg" src={image1} alt="profile" srcset="" />
          <div class="shadow"></div>
          <h1>KESHAB</h1>
        </div>
        <div class="navbar intro">
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

        <div class="summary">
          <h2>Full-stack Developer</h2>
          <p>
            Highly motivated and passionate full stack developer currently
            residing in Sydney, Australia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
