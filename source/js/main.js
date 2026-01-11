import Swiper from 'swiper';
import {Navigation, Pagination, Scrollbar, Keyboard, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import'./nav.js';
import './modal.js';

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

const programsSwiper = new Swiper('.programs__swiper', {
  modules: [Pagination, Navigation, Scrollbar, Keyboard, A11y],
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.programs__swiper-button--next',
    prevEl: '.programs__swiper-button--prev',
  },
  scrollbar: {
    el: '.programs__swiper-scrollbar',
    draggable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: {
    enabled: true,
  },
  breakpoints: {
    0: {
      pagination: {
        el: null,
      }
    },
    768: {
      slidesPerView: 'auto',
      pagination: {
        el: '.programs__swiper-pagination',
        type: 'progressbar',
      }
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,

      pagination: {
        el: '.programs__swiper-pagination',
        type: 'progressbar',
      }
    },
  },
});
