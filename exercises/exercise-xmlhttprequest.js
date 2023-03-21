'use strict';

/*
    Exercise

    Отримати середню ціну 30 товарів з API https://dummyjson.com/products
*/

function getAveragePrice() {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://dummyjson.com/products');

    request.send();

    request.addEventListener('load', function() {
        const data = JSON.parse(this.responseText).products;
        const prices = [];

        for(let product of data) {
            prices.push(product.price)
        }
        console.log(prices.reduce((a, b) => a + b, 0) / prices.length);
    });

}

getAveragePrice();