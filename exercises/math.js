'use strict'
//Exercise 1
// Написати функцію, яка приймає min та max і повертає випадкове число між ними, включно з ними

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(1, 20));
