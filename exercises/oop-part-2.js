'use strict'

const Book = function (title, author) {
    this.author = author;
    this.title = title;
    this.isRead = false;
}

Book.prototype.read = function () {
    this.isRead = true;
}

Book.prototype.cover = 'Paper'

const lordOfTheRing = new Book('Lord of the ring', 'Tolkien');

lordOfTheRing.read();

console.log(lordOfTheRing);
console.log(lordOfTheRing.cover);

console.log(lordOfTheRing.hasOwnProperty('cover'));
console.log(lordOfTheRing.hasOwnProperty('author'));

console.log(lordOfTheRing.__proto__);
console.log(lordOfTheRing.__proto__ === Book.prototype);

console.log(Book.prototype.isPrototypeOf(Book));