import Axios from 'axios';

class ClientArea {
  constructor(){
    this.injectHTML();
    this.reactBtn = document.querySelector('.react-trigger');
    this.events();
  }

  events(){
    this.reactBtn.addEventListener('click', () => this.sendRequest());
  }

  // sendRequest(){
  //   Axios.post('https://determined-heyrovsky-208429.netlify.com/', { password: this.input.value })
  //   .then((response) => {
  //     this.form.remove();
  //     this.contentArea.innerHTML = response.data;
  //   })
  //   .catch(() => {
  //     this.contentArea.innerHTML = `<p class="client-area__error">That secret phase is not correct, please try again.</p>`;
  //     this.input.value = '';
  //     this.input.focus();
  //   });
  // }

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
