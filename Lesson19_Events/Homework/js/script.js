//===========task1===============
function viewModal() {
  let modal = document.querySelector(".modal"),
    elem = document.querySelector("body");
  let h = parseInt(window.getComputedStyle(elem, null).height);
  console.log(h);
  window.addEventListener("scroll", function (event) {
    console.log(window.scrollY);
    window.scrollY > h / 2
      ? (modal.style.display = "block")
      : (modal.style.display = "none");
  });
}
viewModal();
//===========task2=========
function form() {
  let buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML.includes("Add")) {
      buttons[i].addEventListener("click", () => {
        let inputs = document.querySelectorAll(".block-inputs");
        newinput = inputs[inputs.length - 1].cloneNode(true);
        inputs[inputs.length - 1].after(newinput);
      });
    }
    if (buttons[i].innerHTML.includes("Submit")) {
      buttons[i].addEventListener("click", (event) => {
        event.preventDefault();
        let inputs = document.querySelectorAll(".block-inputs");
        let info = [];
        for (let j = 1; j < inputs.length; j++) {
          info.push(inputs[j].querySelector("input").value);
        }
        console.log(info);
      });
    }
  }
  let inputs = document.querySelectorAll(".block-inputs");
  for (let i = 1; i < inputs.length; i++) {
    let inputbuttons = inputs[i].querySelectorAll("button");
    for (let j = 0; j < inputbuttons.length; j++) {
      if (inputbuttons[j].innerHTML.includes("Remove")) {
        inputbuttons[j].addEventListener("click", () => {
          let input = document.querySelectorAll(".block-inputs");
          inputs[i].remove();
        });
      }
    }
  }
}

form();
