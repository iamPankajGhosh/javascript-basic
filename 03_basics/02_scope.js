/**
 * scope
 */

// global scope
let a = 300;

// block scope
if(true) {
    let a = 10;
    const b = 20;
    console.log("Inner : ", a);
}

console.log(a);
