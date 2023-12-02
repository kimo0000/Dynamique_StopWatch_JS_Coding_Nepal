const timer = document.querySelector(".timer");
const btns = document.querySelectorAll(".btns span");

let counter = null;
let milli = 0;
let second = 0;
let minute = 0;
let hour = 0;

const updateTimer = (e) => {
  if (e.target.textContent === "Start") {
    counter = setInterval(() => {
      milli++;

      if (milli === 100) {
        milli = 0;
        second++;
      }
      if (second === 60) {
        second = 0;
        minute++;
      }
      if (minute === 60) {
        minute = 0;
        hour++;
      }

      timer.innerHTML = `${hour < 10 ? "0" + hour : hour}
         :${minute < 10 ? "0" + minute : minute}:
         ${second < 10 ? "0" + second : second}
         :<span class="milliseconds">${
           milli < 10 ? "0" + milli : milli
         }</span>`;
      btns[0].style.cursor = "not-allowed";
      btns[0].style.opacity = 0.5;
    }, 10);
  }

  if (e.target.textContent === "Stop") {
    clearInterval(counter);
    btns[0].style.cursor = "pointer";
    btns[0].style.opacity = 1;
  }

  if (e.target.textContent === "Reset") {
    clearInterval(counter);
    milli = 0;
    second = 0;
    minute = 0;
    hour = 0;
    timer.innerHTML = '00:00:00:<span class="milliseconds">00</span>';
    btns[0].style.cursor = "pointer";
    btns[0].style.opacity = 1;
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", updateTimer);
});
