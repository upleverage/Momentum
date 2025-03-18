const API_KEY = "c1fb3166b5300ba8d55d8d33d1753b30";

function onGeo(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(URL)
   .then((response) => response.json())
   .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = ', ' + data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp} ℃`;
   });
}

function onGeoError() {
   alert("Can't find you. No weather for you.");
 }

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);