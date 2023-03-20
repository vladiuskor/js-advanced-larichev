'use strict'

class Weapon {
    cost;

    updateWeapon(){}

    dealDamage(){}
}

class Rifle extends Weapon {
    shoot() {
        this.dealDamage();
    }
}

class Sword extends Weapon {
    strike() {
        this.dealDamage();
    }
}