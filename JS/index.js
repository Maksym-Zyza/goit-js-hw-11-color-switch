const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body')
const startBnRef = document.querySelector('[data-action="start"]')
const stopBnRef = document.querySelector('[data-action="stop"]')

const logger = () => console.log(`Лог каждые 1s - ${Date.now()}`);
// const intervalId = setInterval(logger, 2000);

startBnRef.classList.add('btn')
stopBnRef.classList.add('btn')

let id = null;

startBnRef.addEventListener('click', clickStartBn)
stopBnRef.addEventListener('click', clickStopBn)

function clickStartBn() {
    id = setInterval(setBodyColor, 1000)

    startBnRef.setAttribute('disabled', true)
    stopBnRef.removeAttribute('disabled');
}
function clickStopBn() {
    clearInterval(id)
    id = null;

    stopBnRef.setAttribute('disabled', true)
    startBnRef.removeAttribute('disabled');
}
 
function setBodyColor() {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
 }

function randomIntegerFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

