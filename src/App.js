import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sketch from './components/sketch.jsx'
import Navigation from './components/navigation.jsx'



function App() {
  return (
    <div className="App">
      <header>
        <Navigation></Navigation>
      </header>
      <body className="flex-container">
        <Sketch></Sketch>
      </body>
    </div>
  );
}

export default App;
