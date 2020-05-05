// setTimeout(function () {
//   alert("пройшло 5 сек");
// }, 5000);
// let interval = setInterval(function () {
//   alert("пройшло 2 сек");
// }, 2000);
// clearInterval(interval);
var xhr = new XMLHttpRequest();
xhr.open("GET", "phones.json", false);
xhr.send();
if (xhr.status != 200) {
  // обробити помилку
  alert("Помилка " + xhr.status + ": " + xhr.statusText);
} else {
  // вивести результат
  let phone = xhr.responseText;
  phone = JSON.parse(phone);
  console.log(phone["name"]);
}
fetch(
  "http://127.0.0.1:5500/C:Users/Max Teplyi/Desktop/Lessons_courses/Lesson20_"
)
  .then((response) => response.json())
  .then((user) => alert(user.name));
