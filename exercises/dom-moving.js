'use strict';

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

const inner = document.querySelector('.inner');
console.log(inner);
console.log(inner.childNodes);
console.log([...inner.children]);

console.log(inner.parentElement);
console.log(inner.parentNode);

const button = document.querySelector('.button');
console.log(button);
console.log(button.closest('.wrapper'));

console.log(button.previousElementSibling);
console.log(button.previousSibling);
console.log(button.nextElementSibling);
console.log(button.nextSibling);

console.log(button.parentElement.children);