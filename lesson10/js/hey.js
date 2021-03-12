


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f1e877f0bd9a6d243ab40b2ed13c9fcd&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('temp_max').textContent = jsObject.main.temp_max;
    document.getElementById('temp_min').textContent = jsObject.main.temp_min;
    document.getElementById('wind_speed').textContent = jsObject.wind.speed;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

  });