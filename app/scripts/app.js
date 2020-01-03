import '../styles/styles.css';

import 'lazysizes';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ClientArea from './modules/ClientArea';


new RevealOnScroll(document.querySelectorAll('.feature-item'), 25);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 40);
new MobileMenu();
new StickyHeader();
new ClientArea();

// React code goes here
/*
import React from 'react';
import ReactDOM from 'react-dom';
import MyAmazingComponent from './modules/MyAmazingComponent';
ReactDOM.render(<MyAmazingComponent props={} />, document.getElementById('react-goes-here'));
*/

// Code splitting the modal component to only load it if/when user clicks on the buttons for that purpose
let modal;

document.body.addEventListener('click', e => {
  if(e.target.classList.contains('open-modal')){
    e.preventDefault();

    if(typeof modal == 'undefined'){

      import('./modules/Modal').then(m => {
        modal = new m.default();
        setTimeout(modal.openModal(), 20);
      })
      .catch(() => console.log('error'));

    } else {
      modal.openModal();
    }
  }
});

// Webpack Dev Server configuration to inject CSS and JS directly into browser's memory, for better performance and auto-reload
if(module.hot){
  module.hot.accept();
}
