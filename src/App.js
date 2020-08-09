import React, { Component } from "react";
import logo from "./images/icon.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";

function App(props) {
  return (
      <div className="App">
        <header>
          <nav className="top-nav-full">
            <div className="navbar-nav mr-auto">
              <Link to="/" className="nav-link">
                {" "}
                Home{" "}
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </div>
          </nav> 
        </header>

        <div className="flex-container">
          {props.children}
        </div>
      </div>
  );
}

export default App;
