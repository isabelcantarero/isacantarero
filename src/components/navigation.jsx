import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import classNames from "classnames";
import Home from './home.jsx';
import About from './about.jsx';

class Navigation extends React.Component {
  render() {
    return (
        <Router>
        <div>
          <nav className="top-nav-full">
          <div className="navbar-nav mr-auto">
            <Link to={'/'} className="nav-link"> Home </Link>
            <Link to={'/about'} className="nav-link">About</Link>
          </div>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default Navigation;
