import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

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

    Axios.post(url, { randomNumber: Math.floor(Math.random() * 100) })
    .then((response) => {
      this.clientArea.remove();

      // ReactDOM.render(<component title={response.data.title} body={response.data.body} />, document.getElementById('react-goes-here'))
      import('./MyAmazingComponent')
      .then(component => console.log(component))
      .catch(() => console.log('error'));
    })
    .catch(() => console.log('error'));
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
