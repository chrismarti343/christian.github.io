
fetch('scripts/temples.json')
.then( result => {
        return result.json();

    })



.then(templesList =>{ 
    let temple = templesList.temples;

    temple.forEach(
        temple => {
            let article = document.createElement('article');

            let h1 = document.createElement('h1');
            h1.textContent = `${temple.name} ${temple.lastname}`;

            let dateOfBirth = document.createElement('p');
            dateOfBirth.textContent = `Date of dedication: ${temple.birthdate}`;

            let placeOfBirth = document.createElement('p');
            placeOfBirth.textContent = `Place: ${temple.birthplace}`;

            let image = document.createElement('img');
            image.setAttribute('src', temple.imageurl);
            image.setAttribute('alt', `${temple.name} ${temple.lastname}`);


            article.appendChild(h1);
            article.appendChild(image);
            article.appendChild(dateOfBirth);
            article.appendChild(placeOfBirth);

            document.querySelector('#temples').appendChild(article);
        }
    );

});
