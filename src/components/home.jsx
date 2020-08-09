import React, { Component } from "react";
import App from "../App";
import hiImIsa from "../images/HomeHiImIsa.png";

class Home extends React.Component {
  render() {
    return (
      <App>
        <div id="homeDiv">
          <div id="isaIntro">
            <img className="isa-image-intro" src={hiImIsa} alt="hiImIsa" />
          </div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" id="carouselContainer">
              <div className="item active">
                <p className="carousel-text">
                  I am a software developer engineer by day... <br></br>
                  Comic developer by night.
                </p>
              </div>
              <div className="item" id="isaWork">
                <p className="carousel-text">
                  {" "}
                  I work as an application's developer @ Oracle.<br></br>
                  My job consist's mostly on front-end web development, and I sometimes help on the back-end side.<br></br>
                  I take the Scrum Master role on our sessions, and also help 2 other teams run theirs.{" "}
                </p>
              </div>

              <div className="item" id="isaHobbies">
                <p className="carousel-text">
                  I love how technology and design combined can create such
                  extraordinary projects and how interesting is all the
                  logistics behind the making of an amazing project.{" "}
                </p>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </App>
    );
  }
}

export default Home;
