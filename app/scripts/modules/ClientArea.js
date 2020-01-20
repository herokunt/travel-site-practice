import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import MyAmazingComponent from './MyAmazingComponent';

class ClientArea {
  constructor(){
    this.injectHTML();
    this.clientArea = document.querySelector('.client-area');
    this.reactBtn = document.querySelector('.react-trigger');
    this.events();
  }

  events(){
    this.reactBtn.addEventListener('click', () => this.sendRequest());
  }

  sendRequest(){
    const url = 'https://determined-heyrovsky-208429.netlify.com/.netlify/functions/my-cloud-function';

    this.reactBtn.textContent = 'Loading...';
    ReactDOM.render(<MyAmazingComponent />, this.clientArea);

    // Axios.post(url, { randomNumber: Math.floor(Math.random() * 100) })
    // .then((response) => {
    //   this.clientArea.remove();
    //   ReactDOM.render(<MyAmazingComponent title={response.data.title} body={response.data.body} randomNumber={response.data.randomNumber} />, document.getElementById('react-goes-here'))
    // })
    // .catch((err) => console.log(err));
  }

  injectHTML(){
    document.body.insertAdjacentHTML('beforeend', `
    <div class="client-area">
      <div class="wrapper wrapper--medium wrapper--center-items">
        <h2 class="section-title section-title--blue">Wanna See Something Cool?</h2>
        <button class="btn react-trigger">Click Me Now!</button>
      </div>
    </div>
    `)
  }
}

export default ClientArea;
