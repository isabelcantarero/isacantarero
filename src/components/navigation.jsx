import React, { Component } from 'react';
import classNames from 'classnames';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "../Views/Home.js";
import Stuff from "../Views/Stuff.js";

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayNav: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    };

    toggleNav() {
        let openNav = this.state.displayNav;
        this.setState({
            displayNav: !openNav
        });
    };


    render() {
        const { displayNav } = this.state;
        return <div>
            <img onClick={this.toggleNav} className="ham-nav" src="https://img.icons8.com/ios-filled/100/000000/menu-2.png"></img>
            <HashRouter>
           <div>
            <nav className="top-nav-full">
                <NavLink to="../Views/Home.js">HOME</NavLink>
                <NavLink to="../Views/Stuff.js">STUFF</NavLink>
                {/* <a href="#">SKETCH</a>
                <a href="#">COMIC</a>
                <a href="#">CONTACT</a> */}
            </nav>
            </div>
            
            {/* {displayNav && (
                <nav id="hambnav" className="top-nav">
                    <a id="homeNav">HOME</a>
                    <a id="sketchNav">SKETCH</a>
                    <a id="comicNav">COMIC</a>
                    <a id="contatcNav">CONTACT</a>
                </nav>
            )} */}
            <div className="content">
            <Route path="../Views/Home.js" component={Home}/>
            <Route path="../Views/Stuff.js" component={Stuff}/>
            </div>
            </HashRouter>
        </div>;
    }
}

export default Navigation;