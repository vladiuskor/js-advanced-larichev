'use strict';

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    buy() {
        console.log('Buy!');
    }
}

class AudioBook extends Book {
    constructor(title, author, lenMin) {
        super(title, author);
        this.lenMin = lenMin;
    }

    log() {
        console.log(`${this.title} - ${this.lenMin} min`);
    }
}

const book = new AudioBook('Lord of the Rings', 'Tolkien', 1200);
book.log();
book.buy();
console.log(book);