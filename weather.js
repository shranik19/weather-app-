const apiKey = "33eaf6e5ba44cf4ffee95e585595da48";
const apiLink =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weather(city) {
  let response = await fetch(apiLink + city + `&appid=${apiKey}`);
  weatherData = await response.json();
  console.log(weatherData);
  document.querySelector(".city").innerHTML = weatherData.name;
  document.querySelector(".situation").innerHTML =
    weatherData.weather[0].description;
  document.querySelector(".wind").innerHTML =
    "Wind:" + weatherData.wind.speed + "km/hr";
  document.querySelector(".humidity").innerHTML =
    "Humidity:" + weatherData.main.humidity + "%";
  document.querySelector(".temp").innerHTML =
    "Temperature:" + Math.round(weatherData.main.temp) + "°";
}
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".cardData button");
  const input = document.querySelector(".cardData input");
  btn.addEventListener("click", () => {
    if (input.value == "") {
      console.log("nothing to do");
    } else {
      weather(input.value);
    }
  });
});
