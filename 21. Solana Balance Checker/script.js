const { Connection, PublicKey, clusterApiUrl } = solanaWeb3;

let selectedNetwork = "devnet";
let connection = new Connection(clusterApiUrl(selectedNetwork));

// Network toggle
document.querySelectorAll(".net-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".net-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedNetwork = btn.dataset.net;
    connection = new Connection(clusterApiUrl(selectedNetwork));
    hideResult();
  });
});

function showLoading() {
  const panel = document.getElementById("resultPanel");
  const inner = document.getElementById("resultInner");
  const label = document.getElementById("resultLabel");
  const value = document.getElementById("resultValue");
  const sub = document.getElementById("resultSub");

  inner.className = "result-inner";
  label.textContent = "Fetching…";
  value.innerHTML =
    '<div class="loader"><span></span><span></span><span></span></div>';
  sub.textContent = "";
  panel.classList.add("show");
}

function showResult(sol, network) {
  const label = document.getElementById("resultLabel");
  const value = document.getElementById("resultValue");
  const sub = document.getElementById("resultSub");

  label.textContent = "Balance";
  value.textContent = `${sol} SOL`;
  sub.textContent = `on ${network}`;
}

function showError(msg) {
  const inner = document.getElementById("resultInner");
  const label = document.getElementById("resultLabel");
  const value = document.getElementById("resultValue");
  const sub = document.getElementById("resultSub");

  inner.className = "result-inner error";
  label.textContent = "Error";
  value.textContent = msg;
  sub.textContent = "";
}

function hideResult() {
  document.getElementById("resultPanel").classList.remove("show");
}

async function checkBalance() {
  const walletInput = document.getElementById("wallet");
  const btn = document.getElementById("balanceCheckBtn");
  const wallet = walletInput.value.trim();

  if (!wallet) {
    walletInput.focus();
    return;
  }

  btn.disabled = true;
  showLoading();

  try {
    const address = new PublicKey(wallet);
    const balance = await connection.getBalance(address);
    const sol = (balance / 1e9).toFixed(4);
    showResult(sol, selectedNetwork);
  } catch (err) {
    if (err.message && err.message.includes("Invalid public key")) {
      showError("Invalid wallet address");
    } else {
      showError("Network error — try again");
    }
  } finally {
    btn.disabled = false;
  }
}

document
  .getElementById("balanceCheckBtn")
  .addEventListener("click", checkBalance);

document.getElementById("wallet").addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkBalance();
});