class Modal{
  constructor(){
    this.injectHTML();
    this.modal = document.querySelector('.modal');
    this.closeBtn = document.querySelector('.modal__close');
    this.events();
  }

  events(){
    // keypress
    document.addEventListener('keyup', (e) => this.handleKeyPress(e));

    // close modal
    this.closeBtn.addEventListener('click', () => this.closeModal());
  }

  // running through code-splitting from app.js
  openModal(e){
    this.modal.classList.add('modal--is-visible');
    document.body.style.overflow = 'hidden';
  }

  closeModal(){
    this.modal.classList.remove('modal--is-visible')
    document.body.style.overflow = 'auto';
  }

  handleKeyPress(e){
    if(e.keyCode === 27){
      this.closeModal();
    }
  }

  injectHTML(){
    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal">
        <div class="modal__inner">
          <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
          </div>

          <div class="social-icons">
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        <div class="modal__close">&times;</div>
      </div>
    `);
  }
}

export default Modal;
