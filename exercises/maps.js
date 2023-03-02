'use strict'
//Basic operations
const weatherMap = new Map();
weatherMap
    .set('London', '10')
    .set('Kyiv', '4')
    .set('Ternopil', '8')

console.log(weatherMap);
console.log(weatherMap.get('Kyiv'));
console.log(weatherMap.has('Kyiv'));


const arrForExample = [1, 2, 3];

weatherMap
    .set(1, 5)
    .set(true, 'yes')
    .set(false, 'no')
    .set(arrForExample, 'array')
    .set({a: 1}, {b: 1})

console.log(weatherMap.get(arrForExample));
console.log(weatherMap);
console.log(weatherMap.size);


//Fast Map creating
const weatherMapSecond = new Map([
    ['London', '10'],
    ['Kyiv', '7'],
    ['Ternopil', '2'],
]);

console.log(weatherMapSecond);

const weatherObj = {
    lviv: 12,
    kyiv: 1,
    ternopil: 0
}

console.log(new Map(Object.entries(weatherObj)));

//Map iteration
for (const [key, value] of weatherMapSecond) {
    console.log(key, value);
}

console.log([...weatherMapSecond]);
console.log(...weatherMapSecond.keys());
console.log(...weatherMapSecond.values());

//Exercise 1
// Необхідно поміняти місцями ключ та значення у наступному Map

let weatherMapExercise = new Map([
    ['London', 10],
    ['Kyiv', 7],
    ['Paris', 14]
]);

let newMap = new Map();

for (const [key, value] of weatherMapExercise) {
    newMap.set(value, key);
}

console.log(newMap);