import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

const mobileMenu = new MobileMenu();
const revealFeatureItems = new RevealOnScroll(document.querySelectorAll('.feature-item'), 25);
const revealTestimonials = new RevealOnScroll(document.querySelectorAll('.testimonial'), 40);

if(module.hot){
  module.hot.accept();
}
