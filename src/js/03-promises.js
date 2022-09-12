// отображения уведомлений
import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', submitFormBtn);

function submitFormBtn(e) {
  e.preventDefault();

  let delay = Number(form.delay.value); // получаем значение инпутов
  // console.log('submitFormBtn -> delay', delay);

  const step = Number(form.step.value);
  // console.log('submitFormBtn -> step', step);

  const amount = Number(form.amount.value);
  // console.log('submitFormBtn -> amount', amount);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}
