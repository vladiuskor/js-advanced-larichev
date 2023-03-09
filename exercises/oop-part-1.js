'use strict'

// Old variant
const User = function (email, password) {
    this.email = email;
    this.password = password + '%%%';
}

const user1 = new User('test@gmail.com', '1234password');
console.log(user1);

const user2 = new User('test2@gmail.com', '12345password');
console.log(user2);
console.log(user2 instanceof User);


/*
    Створюється пустий обʼєкт
    Викликається функція User
    this = пустому обʼєкту
    Обʼєкт звʼязується з prototype
    Повертається обʼєкт
 */