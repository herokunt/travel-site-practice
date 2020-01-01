import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

// Not needed to store instance of objects in variables!
new RevealOnScroll(document.querySelectorAll('.feature-item'), 25);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 40);

const mobileMenu = new MobileMenu();

const stickyHeader = new StickyHeader();

if(module.hot){
  module.hot.accept();
}
