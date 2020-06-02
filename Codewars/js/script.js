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
//   //your code here
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
function isPrime(num) {
  let i = 2,
    result;
  do {
    if (num % i != 0) {
      result = true;
      break;
    } else {
      result = false;
    }
    i++;
  } while (i <= Math.trunc(Math.sqrt(num)));
  return result;
}
console.log(isPrime(1));
