'use strict'

//setTimeout practice
function enableFirstTimer() {
    setTimeout(() => {
        console.log('Boooooom!');
    }, 2000)
}

// enableFirstTimer();

function enableSecondTimer() {
    console.log(performance.now());

    setTimeout(() => {
        console.log(performance.now());
    }, 1000);
}

// enableSecondTimer();

// setInterval practice
function enableThirdTimer() {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 1000);

    setTimeout(() => clearInterval(interval), 5000);
}

// enableThirdTimer();


//Exercise

/*
    Таймер ПІЦИ!

    Створити таймер піци (функція, яка приймає час), який буде приймати час у мілісекундах і буде виводити у консоль секунди до готовності піци та повідомлення про готовність.

   00:04
   00:03
   00:02
   00:01
   00:00
   ПІЦА ГОТОВА!!!
*/

function getPizzaTime(milliseconds) {
    let startPoint = milliseconds;

    const interval = setInterval(() => {
        startPoint = startPoint - 1000;
        console.log(new Intl.DateTimeFormat('uk-UA', {
            minute: 'numeric',
            second: 'numeric'
        }).format(new Date(startPoint)));
    }, 1000);

    setTimeout(() => {
        console.log('ПІЦА ГОТОВА!!!');
        clearInterval(interval);
    }, milliseconds)
}


// getPizzaTime(10000);