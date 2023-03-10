'use strict'

/*
    Створити клас ворога зі здоровʼям та методом отримання шкоди
    Створити клас меча, який має силу та метод нанесення шкоди
    Створити клас орка, який у 50% випадків не отримує шкоди
 */

class Enemy {
    health;
    constructor(health) {
        this.health = health;
    }

    recieveDamage(damage) {
        this.health = this.health - damage;
        console.log(this.health);
    }
}

class Ork extends Enemy {
    constructor(health) {
        super(health);
    }

    recieveDamage(damage) {
        if(Math.random() > 0.5) {
            this.health = this.health - damage;
        }
        console.log(this.health);
    }
}


class Sword {
    #damage;
    constructor(damage) {
        this.#damage = damage;
    }

    strike(enemy) {
        enemy.recieveDamage(this.#damage);
    }
}

const enemy = new Enemy(10);
const sword = new Sword(3);

sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);

const enemy2 = new Ork(100);
const sword2 = new Sword(3);

sword2.strike(enemy2);
sword2.strike(enemy2);
sword2.strike(enemy2);



