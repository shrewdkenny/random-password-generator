let length = 12;
const inputField = document.getElementById("pass");
const button = document.getElementById("btn");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialSynbols = "~!@#$%^&**()_+?{}[]:";
const numbers = "0123456789";
const allChars = upperCase + lowerCase + specialSynbols + numbers;
const copy = document.getElementById("copy");

// event to generate random password
button.addEventListener("click", function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += specialSynbols[Math.floor(Math.random() * specialSynbols.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputField.value = password;
});
// event to select and copy the password
copy.addEventListener("click", function () {
  inputField.select();
  document.execCommand("copy");
});
