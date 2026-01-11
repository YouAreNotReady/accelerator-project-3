const menuToggle = document.querySelector('.main-header__nav-button');
const submenuButtons = document.querySelectorAll('.main-header__submenu-button');
const nav = document.querySelector('.main-header__nav');
const menuOverlay = document.querySelector('.menu-overlay');

const closeNav = () => {
  nav.classList.remove('main-header__nav--is-opened');
  menuOverlay.toggleAttribute('hidden');
};

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('main-header__nav--is-opened');
  menuOverlay.toggleAttribute('hidden');
});

menuOverlay.addEventListener('click', (evt) => {
  if (evt.target === menuOverlay) {
    closeNav();
  }
});

submenuButtons.forEach((button) => {
  const submenu = button.nextElementSibling;
  const links = submenu.querySelectorAll('a');
  let isOpen = false;

  links.forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });

  button.addEventListener('click', () => {
    submenu.classList.toggle('main-header__submenu--is-opened');

    links.forEach((link) => {
      if (!isOpen) {
        link.removeAttribute('tabindex');
      } else {
        link.setAttribute('tabindex', '-1');
      }
    });

    isOpen = !isOpen;
  });
});
