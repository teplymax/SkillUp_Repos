//=================task1==============
// function repeatLorem(n) {
//   for (let i = 0; i < n; i++) {
//     let newp = document.createElement("p");
//     newp.innerHTML = "Lorem";
//     document.body.appendChild(newp);
//   }
// }
// let n = prompt("Enter count of lorem you want to get: ");
// repeatLorem(n);
//==========task2==================
// let getURL = () => {
//   return location.href;
// };
// let getInfoAboutBrowser = function () {
//   return navigator.userAgent;
// };
// console.log(getURL());
// console.log(getInfoAboutBrowser());
//==========task3===================
function operationsWithLi() {
  let elem = document.querySelectorAll("li");
  for (let i = 0; i < elem.length; i++) {
    elem[i].style.color = "blue";
  }
  return elem.length;
}
console.log("There are " + operationsWithLi() + " lies in your document.");
