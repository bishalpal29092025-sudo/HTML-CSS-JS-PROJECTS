// ===== STORED CREDENTIALS (Normally comes from backend/database) =====
const STORED_USERNAME = "bishal";
const STORED_PASSWORD = "12345"; // demo only (never store plain password in real apps)

// ===== LOGIN ATTEMPT LIMIT =====
let attemptsLeft = 3;

// ===== MAIN LOGIN FUNCTION =====
function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Reset message style
  message.className = "";

  // ===== BASIC VALIDATION =====
  if (username === "" || password === "") {
    showError("⚠️ Please fill all fields");
    return;
  }

  // ===== AUTHENTICATION CHECK =====
  if (username === STORED_USERNAME && password === STORED_PASSWORD) {
    showSuccess("✅ Login Successful!");
    attemptsLeft = 3; // reset attempts
    clearInputs();
  } else {
    attemptsLeft--;
    showError(`❌ Login Failed! Attempts left: ${attemptsLeft}`);

    // ===== ACCOUNT LOCK (SECURITY FEATURE) =====
    if (attemptsLeft === 0) {
      showError("🔒 Account Locked! Refresh page to try again.");
      disableLogin();
    }
  }
}

// ===== SUCCESS MESSAGE =====
function showSuccess(text) {
  const message = document.getElementById("message");
  message.textContent = text;
  message.classList.add("success");
}

// ===== ERROR MESSAGE =====
function showError(text) {
  const message = document.getElementById("message");
  message.textContent = text;
  message.classList.add("error");
}

// ===== CLEAR INPUT FIELDS =====
function clearInputs() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// ===== DISABLE LOGIN AFTER TOO MANY FAILURES =====
function disableLogin() {
  document.querySelector("button").disabled = true;
  document.querySelector("button").style.opacity = "0.6";
  document.querySelector("button").style.cursor = "not-allowed";
}