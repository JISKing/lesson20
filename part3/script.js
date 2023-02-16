let multiplication = prompt("Please enter the number");

multiplication = Number(multiplication);

while (isNaN(multiplication) || multiplication < 0) {
  multiplication = prompt(
    "Your number is incorect, please enter corect number"
  );
}

if (multiplication >= 0) {
  alert(`${multiplication} by 12 equals ${multiplication * 12}`);
}