/**
 * datatypes
 */

// primitive datatypes
// non-primitive / reference datatypes

/**
 * primitive datatype
 */

// string
const name = "pankaj";

// number
const score = 100;

// boolean
const isLoggedIn = false;

// null
const outsideTemp = null;

// undefined
let userEmail;

// symbol
const id = Symbol("123");
const anotherId = Symbol("123");

/**
 * reference datatype
 */

// array
const heros = ["saktiman","naagraj", "doga"];

// objects
const myObject = {
    name: "pankaj",
    age: 18
}

//function
const myFunction = function() {
    console.log("hello world");
}

/**
 * stack & heap memory
 */

// stack memory
let myName = "pankaj ghosh"
let anotherName = myName;

anotherName = "new name"

console.log(anotherName);
console.log(myName);

// heap memory
let userOne = {
    email: "user@gmail.com",
    upi : "user@oksbi"
}

let userTwo = userOne;

userTwo.email = "pankaj@gmail.com";

console.log(userTwo.email);
console.log(userOne.email);