import observer from './modules/animationObserver';
import carousel from './modules/carousel';
import modal from './modules/modal';
import postData from './modules/postData';
import scroll from './modules/smothScroll';
import tabs from './modules/tabs';
import toggleSlide from './modules/toggleSlide';
import validationForms from './modules/validateForms';


window.addEventListener('DOMContentLoaded', () => {
  observer('fadeInUp', '.review');
  carousel('.carousel__inner', "icons/arrows/left.png", "icons/arrows/right.png");
  modal();
  postData();
  scroll('.pageup', '#up');
  tabs();
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
  validationForms('#consultation form');
  validationForms('#order form');
  validationForms('#consultation-form');


  $("input[name='phone']").mask("+7 (999) 999-99-99");
});