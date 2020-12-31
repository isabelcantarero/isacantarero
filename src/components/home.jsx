import React, { Component, useState } from "react";
import App from "../App";
import hiImIsa from "../images/HomeHiImIsa.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLinkClass : "nav-link-active",
      aboutLinkClass : "nav-link-inactive"
    }
  }

  // handleHomeLinkClass(){
  //   console.log("")
  //   this.setState((prevState) => {
  //     return {
  //       homeLinkClass: "nav-link-active",
  //       aboutLinkClass : "nav-link-inactive"
  //     };
  //   });
  // }

  // handleAboutLinkClass(){
  //   this.setState((prevState) => {
  //     return {
  //       homeLinkClass: "nav-link-inactive",
  //       aboutLinkClass : "nav-link-active"
  //     };
  //   });
  // }


  render() {
    return (
      <App
      homeClass={this.state.homeLinkClass}
      aboutClass={this.state.aboutLinkClass}>  
              
      </App>
    );
  }
}

export default Home;


// <p className="carousel-text">
//                   I am a software developer engineer by day... <br></br>
//                   Comic developer by night.
//                 </p>
//                 <p className="carousel-text">
//                   {" "}
//                   I work as an application's developer @ Oracle.<br></br>
//                   My job consist's mostly on front-end web development, and I sometimes help on the back-end side.<br></br>
//                   I take the Scrum Master role on our sessions, and also help 2 other teams run theirs.{" "}
//                 </p>
//                 <p className="carousel-text">
//                   I love how technology and design combined can create such
//                   extraordinary projects and how interesting is all the
//                   logistics behind the making of an amazing project.{" "}
//                 </p>