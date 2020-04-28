// function FindTagByClassName(name){
// let doc = document.getElementsByClassName(`${name}`);
// return doc.children;
// }

// let classname = prompt('Enter class of tag which you want to find: ');
// console.log(FindTagByClassName(classname));

// var newli = document.createElement('li');
// newli.innerHTML='hi';
// document.getElementsByClassName('list').appendChild(newli);

var computedStyle = getComputedStyle(document.body);
alert(computedStyle.marginTop);

//===========Tasks===================
let elem = document.body.querySelector(".list");
elem.lastElementChild.innerHTML = "JS";
document.body.firstElementChild.style.color = `red`;
console.log(elem);
for (let i = 1; i <= 5; i++) {
  var newLi = document.createElement("li");
  newLi.innerHTML = `${i}`;
  elem.appendChild(newLi);
}
document.body.querySelector("div").classList.toggle("text");
