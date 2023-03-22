'use strict'

fetch('https://dummyjson.com/products')
    .then(response => {
        if(!response.ok) {
            throw new Error(`Is error ${response.status}`);
        }

        return response.json()
    })
    .then(({products}) => {
        console.log(products);
        return fetch('https://dummyjson.com/products/' + products[0].id);
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(`Is error ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
        document.body.innerHTML = error.message;
    })
    .finally(() => console.log('Finally!'));