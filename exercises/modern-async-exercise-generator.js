'use strict'

/*
    створити генератор 3х ідей від скуки
    https://www.boredapi.com/api/activity
    з відображенням на сторінці
*/
const pageElements = {
    button: document.querySelector('.generator__btn'),
    cardsWrapper: document.querySelector('.cards__wrapper')
}

async function getActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity');
    return response.json();
}

async function getThreeActivities() {
    pageElements.cardsWrapper.innerHTML = '';

    const response = await Promise.all([
        getActivity(),
        getActivity(),
        getActivity()
    ])

    response.map(elem => renderCard(elem))
}

function renderCard({activity}) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = activity;
    
    pageElements.cardsWrapper.insertAdjacentElement('beforeend', card);
}

pageElements.button.addEventListener('click', getThreeActivities);


// Before you enable this code - insert this html-code to html file and enable style-ex.css
//<div class="block__wrapper">
//  <button class="generator__btn">Generate activity!</button>
//  <div class="cards__wrapper">
//  </div>
//</div>

