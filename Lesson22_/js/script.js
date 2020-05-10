// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     alert("I walk: " + this.name);
//   }
// }
// class Rabbit extends Animal {
//   walk() {
//     super.walk();
//     alert("...and jump!");
//   }
// }
// new Rabbit("Вася").walk();
// // I walk: Вася
// // and jump!
class Calculator {
  constructor(argument1, argument2) {
    this.argument1 = argument1;
    this.argument2 = argument2;
  }
  set newargument1(argument1) {
    this._argument1 = argument1;
  }
  set newargument2(argument2) {
    this._argument2 = argument2;
  }
  add() {
    return this.argument2 + this.argument2;
  }
  substract() {
    return this.argument1 - this.argument2;
  }
  multiplicate() {
    return this.argument1 * this.argument2;
  }
  divide() {
    return this.argument1 / this.argument2;
  }
}
let calculator = new Calculator(
  +prompt("Enter first argument: "),
  +prompt("Enter second argument: ")
);
while (true) {
  let operation = prompt("Enter operation: ");
  switch (operation) {
    case "+":
      console.log(calculator.add());
      break;
    case "-":
      console.log(calculator.substract());
      break;
    case "*":
      console.log(calculator.multiplicate());
      break;

    case "/":
      console.log(calculator.divide());
      break;
    default:
      alert("Invalid operation!Try again!");
  }
  calculator.newargument1(+prompt("Enter first argument: "));
  calculator.newargument2(+prompt("Enter second argument: "));
}
