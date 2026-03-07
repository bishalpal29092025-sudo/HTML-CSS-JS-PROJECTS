const emojis = [
  "🍎",
  "🍎",
  "🐶",
  "🐶",
  "🍕",
  "🍕",
  "🚗",
  "🚗",
  "🎮",
  "🎮",
  "🌟",
  "🌟",
  "⚽",
  "⚽",
  "🍔",
  "🍔",
];
let shuffled = emojis.sort(() => 0.5 - Math.random());
const board = document.getElementById("board");

let firstCard = null;
let secondCard = null;
let lock = false;

shuffled.forEach((emoji) => {
  const card = document.createElement("div");
  card.classList.add("card", "hidden");
  card.textContent = emoji;
  card.addEventListener("click", flipCard);
  board.appendChild(card);
});

function flipCard() {
  if (lock) return;
  this.classList.remove("hidden");
  if (!firstCard) {
    firstCard = this;
    return;
  }
  secondCard = this;
  checkMatch();
}

function checkMatch() {
  if (firstCard.textContent === secondCard.textContent) {
    resetCards();
  } else {
    lock = true;
    setTimeout(() => {
      firstCard.classList.add("hidden");
      secondCard.classList.add("hidden");
      resetCards();
    }, 1000);
  }
}

function resetCards() {
  firstCard = null;
  secondCard = null;
  lock = false;
}
