// setTimeout(function () {
//   alert("пройшло 5 сек");
// }, 5000);
// let interval = setInterval(function () {
//   alert("пройшло 2 сек");
// }, 2000);
// clearInterval(interval);
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "phones.json", false);
// xhr.send();
// if (xhr.status != 200) {
//   // обробити помилку
//   alert("Помилка " + xhr.status + ": " + xhr.statusText);
// } else {
//   // вивести результат
//   let phone = xhr.responseText;
//   phone = JSON.parse(phone);
//   console.log(phone["name"]);
// }
// fetch(
//   "http://127.0.0.1:5500/C:Users/Max Teplyi/Desktop/Lessons_courses/Lesson20_"
// )
//   .then((response) => response.json())
//   .then((user) => alert(user.name));
// fetch("https://api.github.com/users/${teplymax}").then((response) =>
//   response.json()
// );

// try {
//   test;
// } catch (e) {
//   alert(`ПОмилка` + e.name + ":" + e.message + "\n" + e.stack);
// }

// try {
//   throw new SyntaxError("sdvvsd");
// } catch (e) {
//   alert(`ПОмилка` + e.name + ":" + e.message + "\n" + e.stack);
// } finally {
//   alert("hi");
// }

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("result");
//   }, 1000);
//   throw new SyntaxError("sdvvsd");
// });
// promise.then(
//   (result) => {
//     alert("resolve: " + result);
//   },
//   (error) => {
//     alert(error);
//   }
// );

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new SyntaxError("sdvvsd")), 1000);
// });
// promise.catch(alert);
// promise.finally(alert("done"));

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 1000);
//   });
//   let result = await promise;
//   alert(result);
// }
// f();

// async function f() {
//   try {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => reject("done"), 1000);
//     });
//     let result = await promise;
//   } catch (err) {
//     alert(err + " error");
//   }
// }
// f();

function f() {
  try {
    alert("начало");
    return "result";
  } catch (e) {
    // ...
  } finally {
    alert("очистка!");
  }
}

f(); // очистка!
