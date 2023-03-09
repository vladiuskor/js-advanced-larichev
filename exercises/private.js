'use strict'

class Car {
    #vin = 6;
    speed;

    constructor() {
       // delete this.#vin; We can't do it
    }

    #changeVin() {
        console.log('Changed');
    }

    test() {
        // Перевірка
        this.#changeVin();
    }

    static #field = 3;

    static {
        this.#field = 5;
    }
}

const car = new Car();
car.test();