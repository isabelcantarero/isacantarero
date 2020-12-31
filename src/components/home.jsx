import React, { Component, useState } from "react";
import App from "../App";
import Presentation from "../components/presentation.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLinkClass: "nav-link-active",
      aboutLinkClass: "nav-link-inactive",
    };
  }
  render() {
    return (
      <App
        homeClass={this.state.homeLinkClass}
        aboutClass={this.state.aboutLinkClass}
      >
        <div className="bg-home-container">
          {/* <div className="home-catch-container">
            <p>
              Software Engineer by day... <br></br>
              Comic developer by night. <br></br>
            </p>
          </div> */}
          <div className="home-titles-container">
            <p className="home-titles">
              I love how technology and design combined can create such
              extraordinary projects and how interesting is all the logistics
              behind the making of an amazing project.
            </p>
          </div>
        </div>
      </App>
    );
  }
}

export default Home;

// <p className="carousel-text">
//                   I am a software developer engineer by day... <br></br>
//                   Comic developer by night.
//                 </p>
//
//                 <p className="carousel-text">
//                   I love how technology and design combined can create such
//                   extraordinary projects and how interesting is all the
//                   logistics behind the making of an amazing project.{" "}
//                 </p>
