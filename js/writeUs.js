const openWriteUs = document.querySelector('.company-address');
const writeUsModal = document.querySelector('.modal-write-us');
const closeWriteUs = document.querySelector('.modal-write-us .close-btn');

openWriteUs.addEventListener('click', function () {
  writeUsModal.classList.remove('visually-hidden');
});

closeWriteUs.addEventListener('click', function () {
  writeUsModal.classList.add('visually-hidden');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!writeUsModal.classList.contains('visually-hidden')) {
      writeUsModal.classList.add('visually-hidden');
    };
  };
});
