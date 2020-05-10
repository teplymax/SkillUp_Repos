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
    console.log(data.main.temp);
  });
