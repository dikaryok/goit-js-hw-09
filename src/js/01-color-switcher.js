const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.start.addEventListener('click', startChangeColor);
refs.stop.addEventListener('click', stopChangeColor);

const PROMPT_DELEY = 1000;
refs.stop.disabled = true;
let intervalId = null;

function startChangeColor() {
  refs.stop.disabled = false;
  refs.start.disabled = true;
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    console.log(refs.body.style.backgroundColor);
  }, PROMPT_DELEY);
}

function stopChangeColor() {
  clearInterval(intervalId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
