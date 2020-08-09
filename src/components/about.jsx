import React, { Component } from 'react';
import igicon from "../images/igicon.png";
import App from '../App';

class About extends Component {
  render() {
    return (
      <App>
        <div className="about-container">
          <h2>Hey</h2>
          <p>If you are watching this, thank you for passing by. 
          <br>  
          </br>
           Im still working on content to make this website a great experience for you!  :D 
           <br>  
          </br>
           You can always pass by my instagram account to see more of me and my adventures.
          </p>
          <a href="https://www.instagram.com/isa.cantarero/" target="_blank">
          <img className="ig-icon" src={igicon} alt="https://www.instagram.com/isa.cantarero/" />
          </a>
        </div>
        </App>
    );
  }
}

export default About;