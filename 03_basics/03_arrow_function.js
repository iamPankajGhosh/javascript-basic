/**
 * arrow function
 */

const myFunction = () => {
    console.log("hello world");
}

myFunction();

// explicit return
const addTwoNumber = (num1, num2) => {
    return num1 + num2;// include return keyword
}

console.log(addTwoNumber(2,3));

// implicit return
const addTwo = (num1, num2) => (num1 + num2);

console.log(addTwo(3,3));