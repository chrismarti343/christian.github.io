function getEvents(cityName){

    fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(result => {
      return result.json();
    })
    .then(
       (result) => {
          result.towns.forEach(
            (town) => {
             if (town.name.toLowerCase() === cityName.toLowerCase()) {
                 town.events.forEach(
                  event => {
                    let li = document.createElement('li');
                    li.textContent = event;
                    console.log(town.events);
                    document.querySelector('#events').appendChild(li);
                  }
                 )
               }
              }
            )
       }
    ); 
    }

getEvents(cityName);
