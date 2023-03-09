'use strict'

//Exercise

/*
    Реалізувати клас користувача, з властивостями:
    - логін
    - пароль

    Пароль, при встановленні має перегортатися та зберігатися у такому вигляді.
    Пароль та логін після створення змінити не можна. Також до класу додати методи
    - зміни пароля (передаємо старий та новий паролі)
    - звірки пароля
*/

class User {
    #login
    #_password

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    set #password(pass) {
        this.#_password = pass.split('').reverse().join('');
    }

    get #password() {
        return this.#_password.split('').reverse().join('');
    }

    get login() {
        return this.#login;
    }

    checkPassword(pass) {
        return this.#password === pass;
    }

    changePassword(oldPass, newPass) {
        if(!this.checkPassword(oldPass)) {
            return false;
        } else {
            this.#password = newPass;
            return true;
        }
    }
}
const newUser = new User('vlad-ko', '1234');
console.log(newUser);
console.log(newUser.login);

console.log(newUser.checkPassword('1234'));
console.log(newUser.checkPassword('12324'));

console.log(newUser.changePassword('1234', '5678'));
console.log(newUser);

