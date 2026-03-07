let time = 1500; // 25 minutes

let timer = null;

const display = document.getElementById("time");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  display.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (timer) return;

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);

  time = 1500;

  updateDisplay();

  timer = null;
});

updateDisplay();