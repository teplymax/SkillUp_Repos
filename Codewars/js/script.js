//================================================================================================
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
//   let arr = friends.filter(function (item) {
//      return item.length>=4;
//     }
//   );
//   return arr;
// }
//============================================================================================
// let likes = (names) => {
//   let text = 0;
//   switch (names.length) {
//     case 0:
//       text = "no one likes this";
//       break;
//     case 1:
//       text = `${names[0]} likes this`;
//       break;
//     case 2:
//       text = `${names[0]} and ${names[1]} like this`;
//       break;
//     case 3:
//       text = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       break;
//     default:
//       text = `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//       break;
//   }
//   return text;
// };
// console.log(likes([]));
// console.log(likes(["max"]));
// console.log(likes(["max", "max"]));
// console.log(likes(["max", "max", "max"]));
// console.log(likes(["max", "max", "max", "max", "max"]));
//========================================================================================
// function list(names) {
//   switch (names.length) {
//     case 1:
//       return names[0].name;
//     default:
//       let text = "";
//       for (let i = 0; i < names.length; i++) {
//         if (i == names.length - 2) {
//           text += names[i].name + " & ";
//         } else if (i == names.length - 1) {
//           text += names[i].name;
//         } else {
//           text += names[i].name + ", ";
//         }
//       }
//       return text;
//   }
// }
// console.log(list([]));
// function solution(str) {
//   let arr = [];
//   if (str.length % 2 == 0) {
//     for (let index = 0; index < str.length; index += 2) {
//       arr.push(str.slice(index, index + 2));
//     }
//   } else {
//     for (let index = 0; index < str.length - 1; index += 2) {
//       arr.push(str.slice(index, index + 2));
//     }
//     arr.push(`${str.slice(str.length - 1)}_`);
//   }
//   return arr;
// }
// console.log(solution('1234'))
// console.log(solution('12'))
// console.log(solution('123'))
// console.log(solution('1'))
// console.log(solution('12345'))
// console.log(solution('1234567'))
//=======================================================================
// function isPrime(num) {
//   let i = 2,
//     result;
//   do {
//     if (num % i != 0) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//     i++;
//   } while (i <= Math.trunc(Math.sqrt(num)));
//   return result;
// }
// console.log(isPrime(1));
//===========================================================================
// function rgb(r, g, b) {
//   function toHex(a) {
//     if (a < 0) return "00";
//     if (a > 255) return "FF";
//     if (a.toString(16).length < 2) return "0" + a.toString(16).toUpperCase();
//     else return a.toString(16).toUpperCase();
//   }
//   return toHex(r) + toHex(g) + toHex(b);
// }
// console.log(rgb(125, 10, 255));
//================================================================================
// function solution(number) {
//     let sum = 0;
//     for (let i = number; i > 0; i--) {
//         if (i % 3 == 0 || i % 5 == 0) sum += i;
//     }
//     return sum;
// }
// console.log(solution(12))
// function isValidIP(str) {
//     let reg = new RegExp('\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b', 'g');
//     return reg.test(str);
// }
// console.log(isValidIP('12.255.56.1'))
// console.log(isValidIP("0.0.0.0"));
// console.log(isValidIP("12.255.56.1"));
// console.log(isValidIP("137.255.156.100"));
// console.log(isValidIP(''));
// console.log(isValidIP('abc.def.ghi.jkl'));
// console.log(isValidIP('123.456.789.0'));
// console.log(isValidIP('12.34.56'));
// console.log(isValidIP('01.02.03.04'));
// console.log(isValidIP('256.1.2.3'));
// console.log(isValidIP('1.2.3.4.5'));
// console.log(isValidIP('123,45,67,89'));
// console.log(isValidIP('1e0.1e1.1e2.2e2'));
// console.log(isValidIP(' 1.2.3.4'));
// console.log(isValidIP('1.2.3.4 '));
// console.log(isValidIP('12.34.56.-7'));
// console.log(isValidIP('1.2.3.4\n'));
// console.log(isValidIP('\n1.2.3.4'));
// function comp(array1, array2) {
//     let result;
//     for (let item1 of array1) {
//         for (let item2 of array2) {
//             if (item1 % item2 == 0 || item2 % item1 == 0) { result = true; } else { result = false; break; }
//         }
//         if (result == false) break;
//     }
//     return result;
// }
// let a, b;
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// console.log(comp(a, b));
// function deleteNth(arr, n) {
//    let counter = 0,
//       newarr = [];

//    return newarr;
// }
// console.log(deleteNth([20, 37, 20, 21], 2))
// function sortArray(array) {
//    // Return a sorted array.
//    let odd = array.filter((item) => {
//       return item % 2 != 0;
//    });
//    odd.sort((a, b) => { return a - b; });
//    let oddIterator = 0;
//    for (let index in array) {
//       if (array[index] % 2 != 0) {
//          array.splice(index, 1, odd[oddIterator]);
//          oddIterator++;
//       }
//    }
//    return array;
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]))
//=============================================================================================
// function toCamelCase(str) {
//    let newstr, camelCaseStr = '';
//    (str.includes('_')) ? newstr = str.split('_') : newstr = str.split('-');
//    for (let i = 0; i < newstr.length; i++) {
//       if (i != 0)
//          newstr[i] = newstr[i].charAt(0).toLocaleUpperCase() + newstr[i].slice(1);
//       camelCaseStr += newstr[i];
//    }
//    return camelCaseStr;
// }
// console.log(toCamelCase('the-stealth-warrior'))
//============================================================================================
function zero() { return 0; }
function one() { return 1; }
function two() { return 2; }
function three() { return 3; }
function four() { return 4; }
function five() { return 5; }
function six() { return 6; }
function seven() { return 7; }
function eight() { return 8; }
function nine() { return 9; }

function plus() { return + arg2(); }
function minus() { return - arg2(); }
function times() { return arg1() * arg2(); }
function dividedBy() { return arg1() / arg2() }
console.log(seven(plus(five)))