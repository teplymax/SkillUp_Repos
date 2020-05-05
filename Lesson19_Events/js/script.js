// elem.onclick = function () {
//   console.log("ok");
// };
// function onClick() {
//   alert("click");
// }
// elem.addEventListener("click", onClick);
// function onClick() {
//   console.log(txt1.value);
// }
// btn.addEventListener("click", onClick);
// elem.addEventListener("click", function (event) {
//   if (event.altKey) {
//     console.log("alt is pressed");
//   }
//   console.log(event);
// });
// elem.addEventListener("click", function (event) {
//   console.log("ll" + event.target.tagName);
// });
// elem.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event);
// });
// window.addEventListener("scroll", function (e) {
//   console.log(this.scrollY);
// });

//=======task2=========
let currentX = 0,
  currentY = 0;
document.body.addEventListener("click", function (event) {
  elem.style.left = `${event.clientX - currentX}px`;
  elem.style.top = `${event.clientY - currentY}px`;
  currentY = event.clientY;
  currentX = event.clientX;
  console.log(event.clientX, event.clientY);
});
//========task3==================
let menuShow = false;
list.addEventListener("click", function (event) {
  if (menuShow) {
    for (let i = 1; i <= 5; i++) {
      let delLi = this.querySelector("ul li");
      delLi.remove();
    }
    let delUl = this.querySelector("ul");
    delUl.remove();
    menuShow = false;
  } else {
    let newlist = document.createElement("ul");
    for (let i = 1; i <= 5; i++) {
      let newli = document.createElement("li");
      newli.innerHTML = "item";
      newlist.appendChild(newli);
    }
    list.appendChild(newlist);
    menuShow = true;
  }
});
//======task4==================
let selectedTd;
let table = document.body.querySelector("table");

table.addEventListener("mouseover", function (event) {
  let target = event.target;
  if (target.tagName != "TD") {
    return;
  } else {
    selectedTd = target;
    selectedTd.style.backgroundColor = "red";
  }
});

table.addEventListener("mouseout", function (event) {
  let target = event.target;
  if (target.tagName != "TD") {
    return;
  } else {
    selectedTd = target;
    selectedTd.style.backgroundColor = "white";
  }
});
//======================task5=====================
window.addEventListener("scroll", function (event) {
  let headr = document.querySelector("header");
  if (this.scrollY > 200) {
    headr.classList.toggle("head");
  }
  console.log(this.scrollY);
});
//==================task6==================================
window.addEventListener("resize", function (event) {
  let element = document.querySelector("div");
  this.innerWidth < 768
    ? element.classList.add("class1")
    : element.classList.remove("class1");
});
