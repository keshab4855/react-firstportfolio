import React from "react";
import image1 from "../images/image1.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <div class="introduction">
          <div class="hero">
            <img
              class="headerimg"
              //   src="images/image1.jpg"
              src={image1}
              alt="profile-picture"
              srcset=""
            />
            <div class="shadow"></div>
            <h1>KESHAB</h1>
          </div>
          <div class="navbar intro">
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

          <div class="summary">
            <h2>Full-stack Developer</h2>
            <p>
              Highly motivated and passionate full stack developer currently
              residing in Sydney, Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
