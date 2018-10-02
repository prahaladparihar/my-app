import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from '../intro';
// import Series from '../../containers/Series';
import Main from '../Main';
import  'whatwg-fetch';
// const Intro = (props) => (
//   <p className="App-intro mt-2">
//     Welcome To The first Rreact App  
//   </p>
// );
class App extends Component {
//   state = {
//     series : []
//   }

  // componentDidMount(){
//     // const series = ["Vikings", ", Games of  Thrones"];
//     // setTimeout(() => {
//     //   this.setState({ series });
//     // }, 2000);
    
//     fetch('http://api.tvmaze.com/search/shows?q=vikings')
//     //  .then( response => response.json())  /*converting into json response  /*console.log(response)  for cheking response */ 
//     //   .then((res)=> {
//     //    console.log(res.data);
//     //  });                  /*console.log(json))*/
//      .then((response) => response.json()) 
//     //  .then(json => console.log(json))  //checking for results
//     .then(json => this.setState({ series:json }))        => goes to container/series.index.js
 
//   }
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

// class Hello extends React.Component {
//   render(){
//     return ( <h1> Prahalad</h1> );
//   }
// }
export default App;

