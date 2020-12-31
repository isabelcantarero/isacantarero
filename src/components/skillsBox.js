import React from "react";
import Skills from "../components/skills.js";

const skillsBox = (props) => {
  return (
    <div className="skills-box-container">
      <div className="skills-container">
        <div className="skills-circle">
          <span className="skills-title">HTML</span>
        </div>
        <div className="stars-container">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-circle">
          <span className="skills-title">CSS</span>
        </div>
        <div className="stars-container">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-circle-w-title">
          <span className="skills-title">JS</span>
        </div>
        <div className="stars-container-w-title">
        <span className="skills-subtitle">JavaScript</span> <br></br>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-circle">
          <span className="skills-title">JAVA</span>
        </div>
        <div className="stars-container">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-circle-w-title">
          <span className="skills-title">Se</span>
        </div>
        <div className="stars-container-w-title">
          <span className="skills-subtitle">Selenium</span> <br></br>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-circle-w-title">
          <span className="skills-title">Qu</span>
        </div>
        <div className="stars-container-w-title">
        <span className="skills-subtitle">QUnit</span> <br></br>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-circle">
          <span className="skills-title">GIT</span>
        </div>
        <div className="stars-container">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-circle-w-title">
          <span className="skills-title">KO</span>
        </div>
        <div className="stars-container-w-title">
        <span className="skills-subtitle">Knockout</span> <br></br>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-circle">
          <span className="skills-title">OJET</span>
        </div>
        <div className="stars-container">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>


    </div>
  );
};

export default skillsBox;
