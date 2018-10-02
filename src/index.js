import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';




// const getCurrentDate = () => {   // => reprensents function
//     const date = new Date();
//     return date.toDateString();


// }

// const greeting = React.createElement('h1', {}, 'Hello World')  //<h1>Hello World</h1>
// const greeting =  <h1 class="text-primary" /*style= {{ marginTop: 30 + 'px'}}*/>   Hello World! Current Date: {getCurrentDate()}  </h1> ; 

// ReactDOM.render(greeting, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>  , 
    document.getElementById('root')
    );
registerServiceWorker();


