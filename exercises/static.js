'use strict';

class Test {
    static a = 1;
    static hello() {
        console.log('Hello, Static 1!');
    }

    static {
        let b = 5;
        this.a = 5;
    }
}

Test.hello();
console.log(Test.a)




const Test2 = function () {
}

Test2.hello = function () {
    console.log('Hello 2!');
}

Test2.hello();
