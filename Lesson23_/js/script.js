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
let carsMap = new Map([
  ["Audi", 35000],
  ["BMW", 55000],
  ["M-B", 65000],
]);

for (let i of carsMap) {
  console.log(i);
}
