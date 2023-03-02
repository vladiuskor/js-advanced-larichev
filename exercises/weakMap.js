'use strict'
//Weak Map
const map = new WeakMap();

let keyOne = {a: 1};
let keyTwo = {b: 1};

map.set(keyOne, 'test 1');
map.set(keyTwo, 'test 2');

console.log(map);
console.log(map.get(keyOne));
console.log(map.has(keyOne));
console.log(map);

keyOne = null;

setTimeout(() => {
    console.log(map)
}, 1000);

let cache = new WeakMap();

function getValue(obj) {
    if(!cache.has(obj)) {
        const res = 1;
        cache.set(obj, res)
    }

    return cache.get(obj);
}


const result = getValue(keyTwo);
console.log(result);
