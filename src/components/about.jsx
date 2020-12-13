import React, { Component } from "react";
import igicon from "../images/igicon.png";
import App from "../App";
import Presentation from "../components/presentation.js";
import Work from "../components/work.js";
import WorkDialog from '../components/workDialog.js';

class About extends Component {
  render() {
    return (
      <App>
        <div className="bg-container">
          <div className="main-container">
            <Presentation></Presentation>
            <Work></Work>
          </div>
          <div className="side-bar-container"></div>
        </div>
        <WorkDialog></WorkDialog>
      </App>
    );
  }
}

export default About;
