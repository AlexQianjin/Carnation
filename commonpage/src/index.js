import React from 'react';
import { render } from 'react-dom';

import App from './App';

render(<App { ...window.xprops }></App>, document.getElementById("root"));

// function component() {
//     let element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.innerHTML = 'Hello webpack';
  
//     return element;
//   }
  
//   document.body.appendChild(component());