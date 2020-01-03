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
      import('./MyAmazingComponent')
      .then(component => ReactDOM.render(<component props={response.data} />, document.getElementById('react-goes-here')))
      .catch(() => console.log('error'));
    })
    .catch(() => {
      this.contentArea.innerHTML = `<p class="client-area__error">That secret phase is not correct, please try again.</p>`;
      this.input.value = '';
      this.input.focus();
    });
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
