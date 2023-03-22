'use strict'

/*
    Зробити запит на  https://dummyjson.com/products/categories, отримати список категорій та відобразити  <select> вибору категорій
*/

function renderSelectCaegories() {
    const select = document.createElement('select');
    const firstOption = document.createElement('option');
    firstOption.textContent = 'Choose a category';
    select.appendChild(firstOption);

    select.appendChild(firstOption);

    fetch('https://dummyjson.com/products/categories')
        .then(respone => respone.json())
        .then((categories) => {

            for(let category of categories) {
                select.appendChild(createOption(category));
            }

            document.body.appendChild(select);
        })
        .catch(error => console.log(error));
}

function createOption(category) {
    const option = document.createElement('option');
    option.setAttribute('value', category);
    option.textContent = category;

    return option;
}


renderSelectCaegories();