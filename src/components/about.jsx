import React, { Component, useState } from "react";
import igicon from "../images/igicon.png";
import App from "../App";
import Presentation from "../components/presentation.js";
import Work from "../components/work.js";
import WorkDialog from "../components/workDialog.js";
import SkillsBox from "../components/skillsBox.js";
import Contact from "../components/contact.js";
import Stamp from "../components/stamp.js";

import oracle from "../images/oracle.png";
import WorkBox from "../components/workBox.js";

class About extends Component {
  constructor(props) {
    super(props);
    this.handleFEDialog = this.handleFEDialog.bind(this);
    this.handleBEDialog = this.handleBEDialog.bind(this);
    this.handleSMDialog = this.handleSMDialog.bind(this);
    this.handleATDialog = this.handleATDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleMailMeDialog = this.handleMailMeDialog.bind(this);
    this.handleFEWorkButtonClass = this.handleFEWorkButtonClass.bind(this);
    this.handleBEWorkButtonClass = this.handleBEWorkButtonClass.bind(this);
    this.handleATWorkButtonClass = this.handleATWorkButtonClass.bind(this);
    this.handleSMWorkButtonClass = this.handleSMWorkButtonClass.bind(this);
    this.handleMailMeButtonClass = this.handleMailMeButtonClass.bind(this);
    this.handleWorkButtonLeave = this.handleWorkButtonLeave.bind(this);
    this.handleHoverCrossDialogButton = this.handleHoverCrossDialogButton.bind(this);
    this.handleHoverCancelMailDialogButton = this.handleHoverCancelMailDialogButton.bind(this);

    this.state = {
      dialogClass: "hide-dialog",
      dialogTitle: "",
      dialogContent: "",
      feWorkButtonClass: "work-box-container",
      beWorkButtonClass: "work-box-container",
      smWorkButtonClass: "work-box-container",
      atWorkButtonClass: "work-box-container",
      mailMeButtonClass: "mail-me-button",
      crossDialogClass: "hide-dialog",
      stampClass : "hide-dialog",
      cardClass : "hide-dialog",
      cancelMailDialogClass : "hide-dialog",
      homeLinkClass : "nav-link-inactive",
      aboutLinkClass : "nav-link-active"
    };
  }

  handleMailMeButtonClass() {
    this.setState((prevState) => {
      return {
        mailMeButtonClass:
          this.state.mailMeButtonClass == "mail-me-button"
            ? "mail-me-hover"
            : "mail-me-button"
      };
    });
  }

  handleMailMeDialog(){
    this.setState((prevState) => {
      return {
        dialogClass: "hide-dialog",
        dialogTitle: "Hi, this is still a work in progress but I will love to colab with you! Please find me on my ig",
        dialogContent: "Hi, this is still a work in progress but I will love to colab with you! Please find me on my ig",
        cancelMailDialogClass : "cancel-mail-button",
        stampClass : "stamp",
        cardClass : "card-container"
      };
    });
  }

  handleFEWorkButtonClass() {
    this.setState((prevState) => {
      return {
        feWorkButtonClass: "work-box-hover",
        crossDialogClass : "cross-button"
      };
    });
  }

  handleBEWorkButtonClass() {
    this.setState((prevState) => {
      return {
        beWorkButtonClass: "work-box-hover",
        crossDialogClass : "cross-button"
      };
    });
  }

  handleSMWorkButtonClass() {
    this.setState((prevState) => {
      return {
        smWorkButtonClass: "work-box-hover",
        crossDialogClass : "cross-button"
      };
    });
  }

  handleATWorkButtonClass() {
    this.setState((prevState) => {
      return {
        atWorkButtonClass: "work-box-hover",
        crossDialogClass : "cross-button"
      };
    });
  }

  handleWorkButtonLeave() {
    this.setState((prevState) => {
      return {
        feWorkButtonClass: "work-box-container",
        beWorkButtonClass: "work-box-container",
        smWorkButtonClass: "work-box-container",
        atWorkButtonClass: "work-box-container",
      };
    });
  }

  handleFEDialog() {
    this.setState((prevState) => {
      return {
        dialogClass: "dialog-box",
        dialogTitle: "Front End",
        dialogContent: "As part of Oracle's Fusion cloud ERP team, I work on the UI development for Payables Application. I meet up with UX members to discuss the direction our App is taking and make it come to true. HTML, JS, CSS, Oracle Jet, Knockout, QUnit are examples of the technologies we use for this project." ,
        stampClass : "hide-dialog",
        cardClass : "hide-dialog",
        cancelMailDialogClass : "hide-dialog",
      };
    });
  }

  handleBEDialog() {
    this.setState((prevState) => {
      return {
        dialogClass: "dialog-box",
        dialogTitle: "Back End",
        dialogContent: "As part of Oracle's Fusion cloud ERP team, I help as backup developer on the REST and Aggregation Services using Java as main language and implementing Power Mockito as testing tool.",
        stampClass : "hide-dialog",
        cardClass : "hide-dialog",
        cancelMailDialogClass : "hide-dialog",
      };
    });
  }

  handleSMDialog() {
    this.setState((prevState) => {
      return {
        dialogClass: "dialog-box",
        dialogTitle: "Scrum Master",
        dialogContent: "For Payables Application's Planning, I help to implement Agile methodologie every day assuming the scrum master role. I interact with our PM in order to get the project priorities set, and make sure the development team understands the effort each task will take, this way we improve our productvity without getting burned.",
        stampClass : "hide-dialog",
        cardClass : "hide-dialog",
        cancelMailDialogClass : "hide-dialog",
      };
    });
  }

  handleATDialog() {
    this.setState((prevState) => {
      return {
        dialogClass: "dialog-box",
        dialogTitle: "Automated Testing",
        dialogContent: "We were recently handed this project to be implemented as a part of a self contained teams arangement where as devs, we create our own automated test cases, using Selenium Java as our primary tool, I'm still learning. ",
        stampClass : "hide-dialog",
        cardClass : "hide-dialog",
        cancelMailDialogClass : "hide-dialog",
      };
    });
  }

  handleCloseDialog() {
    this.setState((prevState) => {
      console.log("asi te escuchas");
      return {
        dialogClass: "hide-dialog",
        cardClass : "hide-dialog",
        crossDialogClass : "hide-dialog",
        stampClass : "hide-dialog",
        cancelMailDialogClass : "hide-dialog"
      };
    });
  }

  handleHoverCrossDialogButton() {
    this.setState((prevState) => {
      return {
        crossDialogClass:
          this.state.crossDialogClass == "cross-button"
            ? "cross-button-hover"
            : "cross-button"
      };
    });
  }

  handleHoverCancelMailDialogButton() {
    this.setState((prevState) => {
      return {
        cancelMailDialogClass:
          this.state.cancelMailDialogClass == "cancel-mail-button"
            ? "cancel-mail-button-hover"
            : "cancel-mail-button"
      };
    });
  }

  render() {
    return (
      <App
      homeClass={this.state.homeLinkClass}
      aboutClass={this.state.aboutLinkClass}>  
        <div className="bg-about-container">
          <div className="main-container">
            <div className="upper-container">
              {/* <Presentation></Presentation> */}
              <div>
                <Work
                  handleFEDialog={this.handleFEDialog}
                  handleBEDialog={this.handleBEDialog}
                  handleSMDialog={this.handleSMDialog}
                  handleATDialog={this.handleATDialog}
                  feWorkButtonClass={this.state.feWorkButtonClass}
                  beWorkButtonClass={this.state.beWorkButtonClass}
                  smWorkButtonClass={this.state.smWorkButtonClass}
                  atWorkButtonClass={this.state.atWorkButtonClass}
                  handleFEWorkButtonClass={this.handleFEWorkButtonClass}
                  handleBEWorkButtonClass={this.handleBEWorkButtonClass}
                  handleSMWorkButtonClass={this.handleSMWorkButtonClass}
                  handleATWorkButtonClass={this.handleATWorkButtonClass}
                  handleWorkButtonLeave={this.handleWorkButtonLeave}
                ></Work>
              </div>
            </div>
            <div className="bottom-container">
              <SkillsBox></SkillsBox>
            </div>
          </div>
          <div className="side-bar-container">
            <Contact
              handleMailMeButtonClass={this.handleMailMeButtonClass}
              handleMailMeDialog = {this.handleMailMeDialog}
              mailMeButtonClass={this.state.mailMeButtonClass}
            ></Contact>
          </div>

          <WorkDialog
            title={this.state.dialogTitle}
            isOpen={this.state.dialogClass}
            closeDialog={this.handleCloseDialog}
            content={this.state.dialogContent}
            crossDialogClass={this.state.crossDialogClass}
            crossButtonHanlder={this.handleHoverCrossDialogButton}
          ></WorkDialog>

          <Stamp
          isOpen={this.state.cardClass}
          closeDialog={this.handleCloseDialog}
          crossDialogClass={this.state.cancelMailDialogClass}
          crossButtonHanlder={this.handleHoverCancelMailDialogButton}
          stampClass={this.state.stampClass}
          ></Stamp>

        </div>
      </App>
    );
  }
}

export default About;
