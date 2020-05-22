import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Navigation from "./components/navigation.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="top-nav-full">
            <div className="navbar-nav mr-auto">
              <Link to={"process.env.https://isabelcantarero.github.io/isacantarero/"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
              <Link to={"process.env.https://isabelcantarero.github.io/isacantarero/about"} className="nav-link">
                About
              </Link>
            </div>
          </nav> 
        </header>

        <body className="flex-container">
          <Switch>
            <Route exact path="process.env.https://isabelcantarero.github.io/isacantarero/" component={Home} />
            <Route path="https://isabelcantarero.github.io/isacantarero/about" component={About} />
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
