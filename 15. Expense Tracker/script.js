const balance = document.getElementById("balance");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

let transactions = [];

addBtn.addEventListener("click", addTransaction);

function addTransaction() {
  const description = text.value.trim();
  const value = +amount.value;

  if (description === "" || amount.value === "") {
    alert("Please enter description and amount");
    return;
  }

  const transaction = {
    id: Date.now(),
    text: description,
    amount: value,
  };

  transactions.push(transaction);

  updateUI();

  text.value = "";
  amount.value = "";
}

function updateUI() {
  list.innerHTML = "";

  transactions.forEach((transaction) => {
    const li = document.createElement("li");

    if (transaction.amount < 0) {
      li.classList.add("expense");
    }

    li.innerHTML = `
${transaction.text} $${transaction.amount}
<span class="delete" data-id="${transaction.id}">x</span>
`;

    list.appendChild(li);
  });

  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      deleteTransaction(Number(this.dataset.id));
    });
  });

  updateBalance();
}

function updateBalance() {
  const amounts = transactions.map((t) => t.amount);

  const total = amounts.reduce((acc, item) => acc + item, 0);

  balance.innerText = total;
}

function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);

  updateUI();
}