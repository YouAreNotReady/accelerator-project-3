import Swiper from "swiper";
import {Navigation, Pagination, Keyboard, A11y} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination, Keyboard, A11y],
  loop: true,
  autoHeight: true,
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: {
    enabled: true,
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,

    },
  },
});

function updateTabIndexes(swiper) {
  swiper.slides.forEach((slide) => {
    const isActive = slide.classList.contains('swiper-slide-active');

    slide
    .querySelectorAll('a, button')
    .forEach((el) => {
      el.tabIndex = isActive ? 0 : -1;
    });
  });
}

updateTabIndexes(heroSwiper);

heroSwiper.on('slideChange transitionEnd', () => {
  updateTabIndexes(heroSwiper);
});
