import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from '../intro';
import Main from '../Main';
import  'whatwg-fetch';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Movie Series </h1>
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
       <Intro message="Here you can find all of your most loved series" />   
       <Main />

        
      </div>
    );
  }
}
export default App;

