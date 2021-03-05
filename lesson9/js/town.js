

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);
    for (let i = 0; i < 3; i++ ) { 

        let card = document.createElement('article');
        
        let text = document.createElement('div');
        text.classList.add('data');

        let image_box = document.createElement('div');
        image_box.classList.add('image_box');


        
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let found = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        found.textContent ="Year Founded: " +  towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rain.textContent ="Annual Rain Fall: " + towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt', towns[i].name);
       

        card.appendChild(text);
        card.appendChild(image_box);
        text.appendChild(h2);
        text.appendChild(motto);
        text.appendChild(found);
        text.appendChild(population);
        text.appendChild(rain);
        image_box.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        
    }
    
  });