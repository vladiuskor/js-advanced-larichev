'use strict'

class Treasure {
    value = 0;
}

class Coin extends Treasure {
    value = 1;
}

class Crystal extends Treasure {
    value = 10;
}

class Brilliant extends Treasure {
    value = 20;
}

class Inventory {
    #score;

    // Bad practice!!!
    // pick(treasure) {
    //     if(treasure instanceof Coin) {
    //         this.#score += 1;
    //     }

    //     if(treasure instanceof Crystal) {
    //         this.#score += 10;
    //     }
    // }

    pick(treasure) {
        this.#score += treasure.value;
    }

    pickCoin() {

    }
}