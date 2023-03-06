'use strict'
// Basic
const now = new Date();
console.log(now);

console.log(new Date('06-03-2022'));
console.log(new Date('06/03/2022'));
console.log(new Date('6 March 2022'));

console.log(Date.now());

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getTime());

console.log(new Date(now.setFullYear(2030)));


//Operations with date
const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);

console.log(Number(date1));
console.log(Number(date2));

console.log(date2 - date1);

function getDaysBetweenDates(dateFirst, dateSecond) {
    return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(date1, date2));

//Date comparison
const first = new Date (2024, 10, 4);
const second = new Date (2024, 10, 3);

console.log(first > second);
console.log(first < second);

const third = new Date(2023, 2, 6);
const fourth = new Date(2023, 2, 6);

console.log(third === fourth);
console.log(Number(third) == Number(fourth));
console.log(third.getTime() === fourth.getTime());

//Exercise
/*
    Створити функцію, яка приймає користувача та перевіряє, чи сьогодні в нього День Народження
*/

const user = {
    name: 'Vlad',
    birthday: '3/6/2022'
}

function getBirthdayInfo(userData) {
    const currentDate = new Date();
    const userBirthday = new Date(userData.birthday);

    if(currentDate.getMonth() === userBirthday.getMonth() && currentDate.getDate() === userBirthday.getDate()) {
        console.log(`Today is ${userData.name}'s Birthday!!! Best wishes!!!`)
        return true;
    }

    console.log(`Today is not ${userData.name}'s Birthday(((`)
    return false;
}

console.log(getBirthdayInfo(user));


// Date internationalization
const currentDate = new Date();
console.log(currentDate);

console.log(new Intl.DateTimeFormat('uk-UA').format(currentDate));

const options1 = {
    hour: 'numeric',
    minute: 'numeric'
}
console.log(new Intl.DateTimeFormat('uk-UA', options1).format(currentDate));

const options2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long'
}
console.log(new Intl.DateTimeFormat('en-US', options2).format(currentDate));

