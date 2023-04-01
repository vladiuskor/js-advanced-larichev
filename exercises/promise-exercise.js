'use strict'

// Exercise

/*
    Створити функцію myFetch, яка виконує всередині XMLHttpRequest
*/

function myFetch(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);

        request.send();

        request.addEventListener('load', function() {
            if(this.status > 400) {
                reject(new Error(this.status))
            }
            resolve(this.responseText)
        });

        request.addEventListener('error', function() {
            reject(new Error(this.status))
        });

        request.addEventListener('timeout', function() {
            reject(new Error('Timeout'))
        });
    })
}

myFetch('https://dummyjson.com/products')
    .then(response => JSON.parse(response))
    .then(data => console.log(data))
    .catch(error => console.log(error))