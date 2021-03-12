

const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f1e877f0bd9a6d243ab40b2ed13c9fcd&units=imperial";

fetch(apiURLForecast)
    .then(response => response.json())
    .then((jsObject) => {
      let counter = 1;
      jsObject.list.forEach(
        forecast => {
          if (forecast.dt_txt.includes('18:00')) {
            let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
            let dayOfWeek = daysOfWeek[forecastDate.getDay()];

            document.getElementById(`day${counter}`).textContent = dayOfWeek;

            document.getElementById(`temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg';
            console.log(forecast);
            
            
            let imageURLForecast = 'https://openweathermap.org/img/w/' + jsObject.list[counter].weather[0].icon + '.png';

            document.querySelector(`#weather${counter}`).setAttribute('src', imageURLForecast);
            
            console.log(imageURLForecast);
            counter++;
            
          }
        }
      );
      
    });

/*declare date variable */
let currentDate = new Date();
let fullDate;

/*day of week*/
let daysOfWeek  = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let dayOfWeek = currentDate.getDay();
fullDate = daysOfWeek[dayOfWeek];

/*day of month*/
let dayOfMonth = currentDate.getDate();
fullDate += ', ' + dayOfMonth;

console.log(fullDate);

/*month*/
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
fullDate += ' ' + months[currentDate.getMonth()];

/*full year*/
let year = currentDate.getFullYear();
fullDate += ' ' + year;

/*full date
document.querySelector('#current-date').textContent = fullDate;*/