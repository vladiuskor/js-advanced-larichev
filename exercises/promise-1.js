'use strict';

// Simple GET request
// fetch('https://dummyjson.com/products/1')
//     .then(response => response.json())
//     .then(data => console.log(data))


// Chain GET requests
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(({products}) => {
        console.log(products);
        return fetch('https://dummyjson.com/products/' + products[0].id);
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
