'use strict'

const button = document.querySelector('.button');
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', function(event) {
    console.log('Button');
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = 'purple';
});

inner.addEventListener('click', function(event) {
    console.log('Inner');
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = 'blue';
    event.stopPropagation();
});


wrapper.addEventListener('click', function(event) {
    console.log('Wrapper');
    console.log(event.target);
    console.log(event.currentTarget);
    this.style.backgroundColor = 'green';
}, true);


