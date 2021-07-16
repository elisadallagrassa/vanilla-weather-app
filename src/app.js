function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#city-temperature");
  temperatureElement.innerHTML = Math.round((response.data.main.temp);
}

let apiKey = "51758ac4928a75db534673c6f5684b1c";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
