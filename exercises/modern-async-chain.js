'use strict'

const asyncArrow = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e)
        throw e
    }
    
}

// console.log('1')

// Bad practise, because you mix Promise and async/await sintax

// asyncArrow()
//     .then(data => console.log(data))
//     .catch(e => console.error(e))
//     .finally(() => console.log('2'));
// console.log('2')

// --------

(async () => {
    console.log('1')
    const result = await asyncArrow();
    console.log(result);
    console.log('2')
})()

