function generatePassword() {
  const length = document.getElementById("length").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumber = document.getElementById("numbers").checked;
  const hasSymbol = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  let characters = ""

  if (hasUpper) characters = characters + upper;
  if (hasLower) characters = characters + lower;
  if (hasNumber) characters = characters + numbers;
  if (hasSymbol) characters = characters + symbols;

  if (characters == "") {
    alert("Please select at least one option.");
    return;
  }

  let password = "";
  for( let i = 0; i<length; i++){
    const randomIndex = Math.floor(Math.random()*characters.length);
    password = password +  characters[randomIndex];
  }
  document.getElementById("password").value = password;
}

function copyPassword(){
    const passwordField = document.getElementById("password");
    if(passwordField.value == ""){
        alert("Generate a password.");
        return;
    }

    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard!");
}
