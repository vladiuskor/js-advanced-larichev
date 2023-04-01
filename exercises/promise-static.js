'use strict'

const prom = new Promise((resolve) => {
    console.log('Constructor')
    setTimeout(() => {
        resolve('Timer');
    }, 1000);
})

prom.then(data => console.log(data));

Promise.resolve('Instant').then(data => console.log(data));