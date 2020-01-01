import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader{
  constructor(){
    this.siteHeader = document.querySelector('.site-header');
    this.pageSections = document.querySelectorAll('.page-section');
    this.navLinks = document.querySelectorAll('.primary-nav a');
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.scrollDirection = null;
    this.events();
  }

  events(){
    window.addEventListener('scroll', throttle(() => this.runOnScroll(), 100));
    window.addEventListener('resize', debounce(() => this.browserHeight = window.innerHeight, 250));
  }

  runOnScroll(){
    this.determineScrollDirection();

    if(window.scrollY > 60){
      this.siteHeader.classList.add('site-header--dark');
    } else {
      this.siteHeader.classList.remove('site-header--dark');
      this.navLinks.forEach(el => el.classList.remove('is-current-link'));
    }

    this.pageSections.forEach(el => this.calculateScrollPosition(el))
  }

  determineScrollDirection(){
    if(window.scrollY > this.previousScrollY){
      this.scrollDirection = 'down';
    } else {
      this.scrollDirection = 'up';
    }

    this.previousScrollY = window.scrollY;
  }

  calculateScrollPosition(el){
    if(window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight){
      let sectionRevealedPercentage = (el.getBoundingClientRect().y / this.browserHeight) * 100

      if(sectionRevealedPercentage > 1 && sectionRevealedPercentage < 30 && this.scrollDirection == 'down' || sectionRevealedPercentage < 70 && this.scrollDirection == 'up'){
        this.navLinks.forEach(el => el.classList.remove('is-current-link'));
        const matchingEl = el.getAttribute('data-matching-link');
        document.querySelector(matchingEl).classList.add('is-current-link');
      }
    }
  }
}

export default StickyHeader;
