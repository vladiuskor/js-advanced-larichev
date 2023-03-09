'use strict'

class BookClass {
    isRead = false;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    read() {
        this.isRead = true;
    }
}

const lordOfTheRings = new BookClass('lotr', 'Tolkien');

console.log(lordOfTheRings);
console.log(lordOfTheRings.__proto__);
console.log(lordOfTheRings instanceof BookClass);