const modal = document.querySelector('.modal-overlay');
const modalButton = document.querySelector('.about__button');

const openModal = () => {
  modal.hidden = false;
}

const closeModal = () => {
  modal.hidden = true;
}

modalButton.addEventListener('click', () => {
  openModal();
})

modal.addEventListener('click', (evt) => {
  if (evt.target === modal || evt.target.closest('.modal__close')) {
    closeModal();
  }
});
