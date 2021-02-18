var userInput = prompt("What is your bill?");

var tax = userInput * 0.07;

var tip = userInput * 0.05;

var totalBill = 10 + 0.7 + 0.535;

userInput = Math.floor(userInput);

document.body.querySelector(".Variable").innerHTML =
  "Your final bill is " + totalBill;