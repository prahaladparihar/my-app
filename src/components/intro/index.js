import React from 'react';


const Intro = (props) => (
    <p className="App-intro mt-2">
      Welcome To The first Rreact App  <br/>
      {props.message}
       
    </p>
);

export default Intro;