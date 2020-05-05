// function getSum(a, b) {
//   let sum = 0;
//   if (a > b) {
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//   } else {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(getSum(10, 1));
// function friend(friends) {
//   //your code here
//   let arr = friends.filter(function (item) {
//      return item.length>=4;
//     }
//   );
//   return arr;
// }
function validatePIN(pin) {
  //return true or false
  let reg = /^[0-9]/g;
  return reg.test(pin) && (pin.length == 4 || pin.length == 6);
}
console.log(validatePIN("-234"));
