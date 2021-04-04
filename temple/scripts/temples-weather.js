
fetch('scripts/temples.json')
.then( result => {
        return result.json();

    })



.then(templesList =>{ 
    let temple = templesList.temples;

    temple.forEach(
        temple => {
            let article = document.createElement('article');
            article.setAttribute('class',`${temple.name}`)

            let h1 = document.createElement('h1');
            h1.textContent = `${temple.name} ${temple.country}`;

            let dateOfBirth = document.createElement('p');
            dateOfBirth.textContent = `Date of dedication: ${temple.birthdate}`;

            let placeOfBirth = document.createElement('p');
            placeOfBirth.textContent = `Place: ${temple.birthplace}`;

            let image = document.createElement('img');
            image.setAttribute('src', temple.imageurl);
            image.setAttribute('alt', `${temple.name} ${temple.country}`);


            let article2 = document.createElement('article');
            article2.setAttribute('class',`weather`)

           
            let span = document.createElement('span');
            span.setAttribute('id',`weather-title`)
            span.textContent = 'Current Weather'
           
            let span1 = document.createElement('span');
            span1.setAttribute('id',`description-${temple.country}`)
           

            let span2 = document.createElement('span');
            span2.setAttribute('id',`temperature-${temple.country}`)
         
            
            let span3 = document.createElement('span');
            span3.setAttribute('id',`temp_max-${temple.country}`)

            let span4 = document.createElement('span');
            span4.setAttribute('id',`temp_min-${temple.country}`)


            article.appendChild(h1);
            article.appendChild(image);
            article.appendChild(dateOfBirth);
            article.appendChild(placeOfBirth);
            article2.appendChild(span);
            article2.appendChild(span1);
            article2.appendChild(span2);
            article2.appendChild(span3);
            article2.appendChild(span4);

            document.querySelector('#temples').appendChild(article);
            document.querySelector('#temples').appendChild(article2);
        }
    );

});
