//========Adding git avatar======
function viewGitAvatarOnPage() {
  fetch(`https://api.github.com/users/teplymax`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let avatar = document.createElement("img");
      avatar.src = `${data.avatar_url}`;
      document.body.append(avatar);
    })
    .catch((err) => {
      console.log(err);
    });
}
viewGitAvatarOnPage();
//=====weather=======
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19 "
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let newelem = document.createElement("div");
    newelem.setAttribute("id", "weather");
    newelem.innerHTML = `<span>${Math.floor(data.main.temp)}C</span>
    <span>humidity:${Math.floor(data.main.humidity)}%</span>
    <span>feels like:${Math.floor(data.main.feels_like)}C</span>
    <span>Pressure:${Math.floor(data.main.pressure)}hPa</span>
    ${data.weather[0].description}`;
    document.body.append(newelem);
  });
