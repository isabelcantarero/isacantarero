import React, { Component } from 'react';
import classNames from 'classnames';

class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayNav : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    };

    toggleNav(){
        let openNav = this.state.displayNav;
        this.setState({
            displayNav : !openNav
        });
    };


  render() {
      const {displayNav} = this.state;
    return <div>
            <img onClick={this.toggleNav} className="ham-nav" src="https://img.icons8.com/ios-filled/100/000000/menu-2.png"></img>
               <nav className="top-nav-full">
                    <a>HOME</a>
                    <a>SKETCH</a>
                    <a>COMIC</a>
                    <a>CONTACT</a>
                </nav>
                {displayNav && (
                <nav id="hambnav" className="top-nav">
                        <a id="homeNav">HOME</a>
                        <a id="sketchNav">SKETCH</a>
                        <a id="comicNav">COMIC</a>
                        <a id="contatcNav">CONTACT</a>
                    </nav>
                )}     
        </div>;
  }
}

export default Navigation;