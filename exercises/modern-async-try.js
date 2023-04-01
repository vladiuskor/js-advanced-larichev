'use strict'

async function getProducts() {
    try {
        const productsResponse = await fetch('https://dummyjson.com/products');

        if(!productsResponse.ok) {
            throw new Error(productsResponse.status);
        }

        const {products} = await productsResponse.json();


        const productResponse = await fetch('https://dummyjson.com/products/' + products[0].id);
        const product = await productResponse.json();

        console.log(product);
    } catch(error) {
        console.error(error);
    } finally {
        console.log('Finally!');
    }
}

getProducts();

console.log('End!');