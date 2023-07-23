const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let hour;
let minute;
let second;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    hour = "0";
    minute = "0";
    setInterval(() => {
      seconds++;
      second = seconds;
      timerEl.innerHTML = hour + ":" + minute + ":" + second;
      if (second === 59) {
        minute++;
        seconds = 0;
      }
      if (minute === 59) {
        hour++;
        minute = 0;
      }
      if (hour < 10 && minute < 10 && second < 10) {
        timerEl.innerHTML =
          "0" + hour + ":" + "0" + minute + ":" + "0" + second;
      }
      if (hour < 10 && minute >= 10 && second < 10) {
        timerEl.innerHTML = "0" + hour + ":" + minute + ":" + "0" + second;
      }
      if (hour < 10 && minute < 10 && second >= 10) {
        timerEl.innerHTML = "0" + hour + ":" + "0" + minute + ":" + second;
      }
      if (hour < 10 && minute >= 10 && second >= 10) {
        timerEl.innerHTML = "0" + hour + ":" + minute + ":" + second;
      }
      if (hour >= 10 && minute < 10 && second < 10) {
        timerEl.innerHTML = hour + ":" + "0" + minute + ":" + "0" + second;
      }
      if (hour >= 10 && minute >= 10 && second >= 10) {
        timerEl.innerHTML = hour + ":" + minute + ":" + second;
      }
      if (hour >= 10 && minute < 10 && second >= 10) {
        timerEl.innerHTML = hour + ":" + "0" + minute + ":" + second;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
