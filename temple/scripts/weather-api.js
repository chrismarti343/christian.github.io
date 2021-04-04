



const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3657509&appid=f1e877f0bd9a6d243ab40b2ed13c9fcd&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('description-Ecuador').textContent = 'Description: '+ jsObject.weather[0].description;
    document.getElementById('temperature-Ecuador').textContent = 'Current Temperature: '+jsObject.main.temp + '°F';
    document.getElementById('temp_max-Ecuador').textContent = 'Max Temperature: '+jsObject.main.temp_max + '°F';
    document.getElementById('temp_min-Ecuador').textContent = 'Min Temperature: '+jsObject.main.temp_min + '°F';
   
  });


const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=3437598&appid=f1e877f0bd9a6d243ab40b2ed13c9fcd&units=imperial";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('description-Paraguay').textContent = 'Description: '+ jsObject.weather[0].description;
    document.getElementById('temperature-Paraguay').textContent = 'Current Temperature: '+jsObject.main.temp + '°F';
    document.getElementById('temp_max-Paraguay').textContent = 'Max Temperature: '+jsObject.main.temp_max + '°F';
    document.getElementById('temp_min-Paraguay').textContent = 'Min Temperature: '+jsObject.main.temp_min + '°F';
   
  });

const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?id=4180439&appid=f1e877f0bd9a6d243ab40b2ed13c9fcd&units=imperial";
fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('description-Georgia').textContent = 'Description: '+ jsObject.weather[0].description;
    document.getElementById('temperature-Georgia').textContent = 'Current Temperature: '+jsObject.main.temp + '°F';
    document.getElementById('temp_max-Georgia').textContent = 'Max Temperature: '+jsObject.main.temp_max + '°F';
    document.getElementById('temp_min-Georgia').textContent = 'Min Temperature: '+jsObject.main.temp_min + '°F';
   
  });

const apiURL4 = "https://api.openweathermap.org/data/2.5/weather?id=3947319&appid=f1e877f0bd9a6d243ab40b2ed13c9fcd&units=imperial";
fetch(apiURL4)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('description-Peru').textContent = 'Description: '+ jsObject.weather[0].description;
    document.getElementById('temperature-Peru').textContent = 'Current Temperature: '+jsObject.main.temp + '°F';
    document.getElementById('temp_max-Peru').textContent = 'Max Temperature: '+jsObject.main.temp_max + '°F';
    document.getElementById('temp_min-Peru').textContent = 'Min Temperature: '+jsObject.main.temp_min + '°F';
   
  });
