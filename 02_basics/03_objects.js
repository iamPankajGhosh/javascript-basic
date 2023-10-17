/**
 * objects
 */

// type of declearation - 1. literals(non-singleton) 2. constructor(singleton)

// literals
const js_user = {
    name : "pankaj ghosh",
    age : 18,
    location : "kolkata",
    email : "pankaj@gmail.com",
    isLoggedIn : false
}

console.log(js_user.email);
console.log(js_user["email"]);// always use this

const mySym = Symbol("key1");
const jsUser = {
    [mySym] : "mykey1"
}

console.log(jsUser[mySym]);

js_user.email = "pankajghosh@gmail.com";
// Object.freeze(js_user);// update freez
js_user.email = "pankaj@gmail.com";
console.log(js_user.email);

js_user.greeting = function () {
    console.log("hello world");
}

js_user.greetingTwo = function () {
    console.log(`hello ${this.name}`);
}

console.log(js_user.greeting());
console.log(js_user.greetingTwo());