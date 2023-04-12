'use strict'

/*
    Динамічно створити N елементів з текстом та поле для пошуку.
    Після введення в полі, виділяти елементи, які містять у собі введений текст.
*/

const wrapper = document.querySelector('.wrapper');

for(let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.innerHTML = i;
    wrapper.append(el)
}

function search(event) {
    const inputValue = event.target.value;

    for(const el of [...wrapper.children]) {
        if(el.innerHTML.includes(inputValue)) {
            el.classList.add('yellow');
            continue;
        }

        el.classList.remove('yellow');
    }
}