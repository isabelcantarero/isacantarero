import React, { Component } from "react";
import logo from "./images/icon.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";

const App = (props) => {
  return (
    <div className="App">
      <header>
        <nav className="top-nav-full">
          <div>
            <Link to="/" className={props.homeClass}>
              {" "}
              Home{" "}
            </Link>
            <Link to="/about" className={props.aboutClass}>
              About
            </Link>
          </div>
        </nav>
      </header>

      <body className="flex-container">{props.children} </body>
    </div>
  );
}

export default App;
