import React, { Component, useState } from "react";
import Modal from 'react-modal';
import App from "../App";
import Presentation from "../components/presentation.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {
      homeLinkClass: "nav-link-active",
      aboutLinkClass: "nav-link-inactive",
      setOpen: true
    };
  }

  handleClose(){
    this.setState((prevState) => {
      return {
        setOpet:false
      };
    });
  }

  handleOpen(){
    this.setState((prevState) => {
      return {
        setOpet:true
      };
    });
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
{/* 

            <button className="mail-me-button" type="button" onClick={this.handleOpen}>
              Open Modal
            </button>
            <Modal
              open={"true"}
              onClose={this.handleClose}
              className="dialog-box"
            >
              <div className="dialog-box">
                <h2 id="simple-modal-title">Text in a modal</h2>
                <p id="simple-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
              </div>
            </Modal> */}

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
