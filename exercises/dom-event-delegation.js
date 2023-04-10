'use strict'

const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.innerHTML = `User id ${i}`;
    el.setAttribute('data-id', i)
    // el.addEventListener('click', function() {
    //     console.log(`Deleted user ${i}`)
    // })
    wrapper.append(el);
}

wrapper.addEventListener('click', function(event){
    const i = event.target.getAttribute('data-id');
    console.log(i);
})