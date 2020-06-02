// let ob1 = {
//   adge: 25,
//   name: "petro",
// };
// let { adge, name } = ob1;
// console.log(adge, name);
// let [first, sec] = ["1", "2"];
// console.log(first, sec);
// let [a, b, ...info] = ["dsdcs", "sdscd", "dsads", "dsscd"];
// // console.log(a, b, info);
// let getRemainder = (argument1, argument2 = 2) => argument1 % argument2;

// console.log(getRemainder(3, 3));
// let carsMap = new Map([
//   ["Audi", 35000],
//   ["BMW", 55000],
//   ["M-B", 65000],
// ]);

// for (let i of carsMap) {
//   console.log(i);
// }
//=========let===========

// if (true) {
//   version = "es5";
// }
// console.log(version);
// let buttons = document.querySelectorAll("button");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].innerText = i;
//   buttons[i].onclick = function () {
//     console.log(i);
//   };
// }
//==========const==================

// const PI = 3.14;
// console.log(PI);
// const MATH = { Pi: 3.14 };
// console.log(MATH.Pi);
// MATH.Pi = 2;
// console.log(MATH.Pi);

//============spread operator==============

// let arr = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// let num = [...arr, ...arr2];
// console.log(num);
// function sum(x, y, z) {
//   return x + y + z;
// }
// console.log(sum(...arr2));

//=========tamplate string============

// let str = "fdsaasd";
// console.log("hi " + str);
// console.log(`hi ${str}`);

//======parameters and for of(for in)==================

(function (a = "a", b = "b") {
  console.log(`${a + b}`);
})(2, 3);

function sum(...params) {
  for (let index in params) {
    console.log(`for in: ${index}`);
  }

  let sum = 0;
  for (let param of params) {
    sum += param;
  }
  return sum;
}
console.log(sum(5, 7, 2, 10));
