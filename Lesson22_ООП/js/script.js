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
//  I walk: Вася
//  and jump!
// =============calculator==================
// class Calculator {
//   constructor(argument1, argument2) {
//     this.argument1 = argument1;
//     this.argument2 = argument2;
//   }
//   set newargument1(argument) {
//     this.argument1 = argument;
//   }
//   set newargument2(argument) {
//     this.argument2 = argument;
//   }
//   add() {
//     return this.argument1 + this.argument2;
//   }
//   substract() {
//     return this.argument1 - this.argument2;
//   }
//   multiplicate() {
//     return this.argument1 * this.argument2;
//   }
//   divide() {
//     return this.argument1 / this.argument2;
//   }
// }
// let calculator = new Calculator(
//   +prompt("Enter first argument: "),
//   +prompt("Enter second argument: ")
// );
// while (true) {
//   let operation = prompt("Enter operation: ");
//   switch (operation) {
//     case "+":
//       console.log(calculator.add());
//       break;
//     case "-":
//       console.log(calculator.substract());
//       break;
//     case "*":
//       console.log(calculator.multiplicate());
//       break;

//     case "/":
//       console.log(calculator.divide());
//       break;
//     default:
//       alert("Invalid operation!Try again!");
//       break;
//   }
//   let next = confirm("Next operation?");
//   if (!next) break;
//   calculator.newargument1 = parseInt(prompt("Enter first argument: "));
//   calculator.newargument2 = parseInt(prompt("Enter second argument: "));
// }
//================timer================
class Timer {
  constructor() {
    this.seconds = new Number(prompt("enter seconds of timer: ", 0));
    this.minutes = new Number(prompt("enter minutes of timer: ", 0));
    this.hours = new Number(prompt("enter hours of timer: ", 0));
  }
  checkEntries() {
    while (this.seconds > 60 || this.seconds < 0 || isNaN(this.seconds)) {
      this.seconds = new Number(prompt("enter seconds of timer: ", 0));
    }
    while (this.minutes > 60 || this.minutes < 0 || isNaN(this.seconds)) {
      this.minutes = new Number(prompt("enter minutes of timer: ", 0));
    }
    while (isNaN(this.hours)) {
      this.hours = new Number(prompt("enter hours of timer: ", 0));
    }
  }
  start() {
    this.intervalId = setInterval(() => {
      console.log(`${this.hours}:${this.minutes}:${--this.seconds}`);
      if (this.seconds <= 0 && this.minutes > 0) {
        this.seconds = 60;
        this.minutes--;
      }
      if (this.seconds <= 0 && this.minutes <= 0 && this.hours > 0) {
        this.seconds = 60;
        this.minutes = 59;
        this.hours--;
      }
      if (this.seconds <= 0 && this.minutes <= 0 && this.hours <= 0)
        clearInterval(this.intervalId);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  reset() {
    this.stop();
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }
}
let timer = new Timer();
timer.checkEntries();
