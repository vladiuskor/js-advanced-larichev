'use strict'

const prom = new Promise((resolve, reject) => {
    if(new Date() < new Date('01/01/2024')) {
        reject(new Error('Fail!'))
    }

    resolve('Success!');
});

prom
    .then(data => console.log(data))
    .catch(error => console.log(error))


function timeout(sec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, sec * 1000)
    })
}

timeout(2)
    .then(() => {
        console.log(3);
        return timeout(3);
    })
    .then(() => {
        console.log(3)
    })