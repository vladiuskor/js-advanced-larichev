'use strict'

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        console.log(`${this.title} - ${this.author}`)
    }
}

const book = new Book('Lord of the Rings', 'Tolkien');
book.info();

class EBook extends Book {
    constructor(title, author, pages) {
        super(title, author);
        this.pages = pages;
    }

    info() {
        console.log(`${this.title} - ${this.author} - ${this.pages}`)
    }
}

const book2 = new EBook('Lord of the Rings', 'Tolkien', 1200);
book2.info();