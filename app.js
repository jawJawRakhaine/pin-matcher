function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
document.getElementById("key-pad").addEventListener("click", function (event) {
  const calcInput = document.getElementById("typed-numbers");
  const number = event.target.innerText;
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});
function times() {
  let tryTimes = document.getElementById("try");
  let remain = parseInt(tryTimes.innerText);
  if (remain > 0) {
    remain = remain - 1;
    tryTimes.innerText = remain;
  } else {
    document.getElementById("submit-btn").style.display = "none";
  }
}
function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumber = document.getElementById("typed-numbers").value;
  const failMessage = document.getElementById("notify-fail");
  const successMessage = document.getElementById("notify-success");
  if (pin == typedNumber) {
    successMessage.style.display = "block";
    failMessage.style.display = "none";
  } else {
    successMessage.style.display = "none";
    failMessage.style.display = "block";
    times();
  }
}
