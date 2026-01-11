const menuToggle = document.querySelector('.main-header__nav-button');
const submenuToggles = document.querySelectorAll('.main-header__submenu-button');
const submenuButtons = document.querySelectorAll('.main-header__submenu-button');
const nav = document.querySelector('.main-header__nav');
const menuOverlay = document.querySelector('.menu-overlay');

const closeNav = () => {
  nav.classList.remove('main-header__nav--is-opened');
  menuOverlay.toggleAttribute('hidden');
}

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('main-header__nav--is-opened');
  menuOverlay.toggleAttribute('hidden');
});

submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parent = toggle.closest('.has-submenu');
    parent.classList.toggle('open');
  });
});

menuOverlay.addEventListener('click', (evt) => {
  if (evt.target === menuOverlay) {
    closeNav();
  }
});

submenuButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('main-header__submenu--is-opened');
  });
});
