// index.js 
 
import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
 
let element = React.createElement(App, {});
render(element, document.querySelector('.container'));