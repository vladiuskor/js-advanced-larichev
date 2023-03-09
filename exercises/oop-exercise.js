'use strict'

//Exercise

/*
    Реалізувати на функціях та прототипах кошик товарів з методами:
    - додати товар
    - збільшити число товарів
    - зменшити число товарів (видалити, якщо їх 0)
*/

const product1 = {
    id: 1,
    name: 'Bread',
    count: 1
};

const product2 = {
    id: 2,
    name: 'Meat',
    count: 1
};

const Cart = function () {
    this.products = []
}

Cart.prototype.addProduct = function (productObject) {

    if(!this.products.find(elem => elem.id === productObject.id)) {
        this.products.push(productObject);
    } else {
        this.products = this.products.map(elem => {
            if(elem.id === productObject.id)  {
                elem.count++
                return elem;
            }
            return elem;
        });
    }
}

Cart.prototype.increaseProductQuantity = function (productId , quantity) {

    if(!this.products.find(elem => elem.id === productId)) {
        console.log('Product does not exist.');
        return;
    } else {
        this.products = this.products.map(elem => {

            if(elem.id === productId)  {
                elem.count += quantity;
                return elem;
            }

            return elem;
        });
    }
}

Cart.prototype.decreaseProductQuantity = function (productId , quantity) {

    if(!this.products.find(elem => elem.id === productId)) {
        console.log('Product does not exist.');
        return;
    } else {
        const newProductList = [];

        for(let i = 0; i < this.products.length; i++) {

            if(this.products[i].id !== productId) {
                newProductList.push(this.products[i]);
            } else {

                this.products[i].count -= quantity;

                if(this.products[i].count <= 0) {
                    continue;
                } else {
                    newProductList.push(this.products[i]);
                }
            }
        }

        this.products = newProductList;
    }
}

const userCart = new Cart();
console.log(userCart);

userCart.addProduct(product1);
userCart.addProduct(product1);
userCart.addProduct(product1);


userCart.addProduct(product2);
userCart.addProduct(product2);

userCart.increaseProductQuantity(3, 4);
userCart.increaseProductQuantity(2, 4);

userCart.decreaseProductQuantity(2, 3);

console.log(userCart);