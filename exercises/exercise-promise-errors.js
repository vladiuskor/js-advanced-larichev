'use strict'

/*
    Зробити функцію, яка приймає строку та текст помилки і повертає Promise із JSON з тіла запиту 
*/

function getData(url, errorMessage) {
    return fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(`${errorMessage} ${response.status}`);
            }
    
            return response.json();
        })
}


getData('https://dummyjson.com/products', 'Can not get products')
    .then(({products}) => {
        console.log(products);
        return getData('https://dummyjson.com/products/' + products[0].id, 'Can not get product');
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
        document.body.innerHTML = error.message;
    })
    .finally(() => console.log('Finally!'));