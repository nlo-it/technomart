const vh = document.querySelector('.visually-hidden');
const loginLink = document.querySelector('.user-login-link');
const modalLogin = document.querySelector('.modal-login');
const closeModal = document.querySelector('.modal-login .close-btn');


loginLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove('visually-hidden');
});

closeModal.addEventListener('click', function () {
  modalLogin.classList.add('visually-hidden');
});
