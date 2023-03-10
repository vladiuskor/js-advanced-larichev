'use strict'

const Book = function(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.buy = function() {
    console.log('Buy!');
}

const AudioBook = function(title, author, lenMin) {
    Book.call(this, title, author);
    this.lenMin = lenMin;
}

AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;

AudioBook.prototype.log = function() {
    console.log(`${this.title} - ${this.lenMin} min`);
}

const book = new AudioBook('Lord of the Rings', 'Tolkien', 1200);
book.log();
book.buy();
console.log(book);
