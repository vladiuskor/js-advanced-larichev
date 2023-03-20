'use strict';

function req(id) {

    const reuest = new XMLHttpRequest();

    reuest.open('GET', 'https://dummyjson.com/products/' + id);
    reuest.send();

    reuest.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
        console.log(data);
    });
}

req(1);
req(2);
req(3);