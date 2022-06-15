import React from "react";
import rotated from "../images/rotated.png";

const About = () => {
  return (
    <>
      <div class="about-me-page">
        <div class="hero heroabout">
          <h1>ABOUT ME</h1>
        </div>
        <div class="navbar aboutmenav">
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

        <div class="box1 aboutbox">
          <div class="aboutimage">
            <img class="aboutpic" src={rotated} alt="" srcset="" />
            <div class="shadow1"></div>
          </div>
          <div class="abouttext">
            <ul>
              <li>ksncksn mscbnjs csjbcsj sjcscks</li>
              <li>scjcnk</li>
              <li>knknkln knknlnk knknnnn bjbj</li>
              <li>jbax jabjhj bkjbjbb jnjkbjb</li>
              <li>knknkn njbjb knjbnjb jbjkbk jnbjkb</li>
              <li>nbvvjkbj</li>
              <li>klnk kljljljlk kjhnnkhjk nlkn nb bjkbkjbk</li>
              <li>jbax jabjhj bkjbjbb jnjkbjb </li>
              <li>knknkn njbjb knjbnjb jbjkbk jnbjkb</li>
              <li>scjcnk</li>
              <li>ksncksn mscbnjs csjbcsj sjcscks</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
