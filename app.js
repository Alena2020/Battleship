const startButton = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');

startButton.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});