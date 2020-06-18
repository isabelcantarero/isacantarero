import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import "./App.css";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";

function App() {
  return (
    <Router basename={'/'}>
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

        <body className="flex-container">
          <Switch>
            <Route path="'/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
