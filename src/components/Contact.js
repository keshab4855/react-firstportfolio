import React from "react";

const Contact = () => {
  return (
    <div class="contactpage" id="contact">
      <div class="hero herocontact">
        <h1>CONTACT ME</h1>
      </div>
      <div class="navbar contactmenav">
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

      <div class="footer">Copyright all reserved!Made with ❤️ by Keshab</div>
    </div>
  );
};

export default Contact;
