import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import "./App.css";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Navigation from "./components/navigation.jsx";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <nav className="top-nav-full">
            <div className="navbar-nav mr-auto">
              <Link to={"/"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </div>
          </nav> 
        </header>

        <body className="flex-container">
          <Switch>
            <Route exact path="process.env.https://isacantarero.com/" component={Home} />
            <Route path="process.env.https://isacantarero.com/about" component={About} />
          </Switch>
        </body>
      </div>
    </HashRouter>
  );
}

export default App;
