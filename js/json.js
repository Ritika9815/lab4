const header = document.querySelector('header');
const section = document.querySelector('section');

async function populate() {
    const requestURL = './js/i-scream.json';
    const response = await fetch(requestURL);
    const iScream = await response.json();
    console.log(iScream);

    populateHeader(iScream);
    showTopFlavors(iScream);
}

populate();

function populateHeader(jsonObj) {
    const headerH1 = document.createElement('h1');
    headerH1.textContent = jsonObj.companyName;
    header.appendChild(headerH1);
}

function showTopFlavors(jsonObj) {
    let topFlavors = jsonObj.topFlavors;

    for (let i = 0; i < topFlavors.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let ul = document.createElement('ul');

        // Set name and image
        h2.textContent = topFlavors[i].name;
        img.setAttribute('src', './images/' + topFlavors[i].image);

        // Ingredients list
        let ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = ingredients[j];
            ul.appendChild(listItem);
        }

        // Calories and Type
        let caloriesPara = document.createElement('p');
        caloriesPara.textContent = "Calories: " + topFlavors[i].calories;

        let typePara = document.createElement('p');
        typePara.textContent = "Type: " + topFlavors[i].type;

        // Interesting feature: highlight low-calorie flavours
        if (topFlavors[i].calories < 300) {
            article.style.backgroundColor = "#e2ffe2"; // light green
        }

        // Append all elements
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(ul);
        article.appendChild(caloriesPara);
        article.appendChild(typePara);

        section.appendChild(article);
    }
}





