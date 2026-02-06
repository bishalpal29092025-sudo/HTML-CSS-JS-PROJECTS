const buttons = document.querySelectorAll(".button");
const body = document.body;

const colors = ["purple", "blue", "red", "yellow", "green", "teal"];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.value.toLowerCase();

    body.classList.remove(...colors);
    body.classList.add(color);
  });
});
