'use strict'

const User = {
    log() {
        console.log('Log');
    }
};

const user = Object.create(User);
console.log(user);
user.log();

user.email = 'vlad@gmail.com';
user.password = '1234';
console.log(user);


