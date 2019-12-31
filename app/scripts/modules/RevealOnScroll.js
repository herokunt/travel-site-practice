import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
  constructor(elements, revealThreshold){
    this.hiddenItems = elements;
    this.revealThreshold = revealThreshold;
    this.browserHeight = window.innerHeight;
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
    this.hideItemsOnLoad();
  };

  events(){
    window.addEventListener('scroll', this.scrollThrottle);
    window.addEventListener('resize', debounce(() => { this.browserHeight = window.innerHeight }, 350));
  };

  hideItemsOnLoad(){
    this.hiddenItems.forEach(item => {
      item.classList.add('reveal-item');
      item.isHidden = true;
    });
    this.hiddenItems[this.hiddenItems.length - 1].isLastItem = true;
  };

  calcCaller(){
    this.hiddenItems.forEach(item => {
      if(item.isHidden){
        this.calculateScrollPosition(item);
      }
    });
  };

  calculateScrollPosition(item){
    if(window.scrollY + this.browserHeight > item.offsetTop){
      let itemRevealedPercentage = (item.getBoundingClientRect().y / this.browserHeight) * 100; // A percentage of how much of this element is revealed in the screen viewport.

      if(itemRevealedPercentage > this.revealThreshold){
        item.classList.add('reveal-item--is-visible');
        item.isHidden = false;

        if(item.isLastItem){
          window.removeEventListener('scroll', this.scrollThrottle);
        }
      }
    }
  };
};

export default RevealOnScroll;
