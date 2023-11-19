/**
 * function also a object
 */

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, price){
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function(){
    this.price++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const tea = new createUser("tea", 25);
const coffee = createUser("coffee", 250);

tea.printMe();

/**
 * create custom method
 */

let myHeros = ["thor", "spiderman"];

let heroPower = {
    "thor" : "hammer",
    "spiderman" : "sling",

    getSpiderPower : function() {
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.pankaj = function(){
    console.log(`pankaj is present in all object`);
}

Array.prototype.heyPankaj = function() {
    console.log(`pankaj say hello`);
}

heroPower.pankaj();
myHeros.pankaj();

myHeros.heyPankaj();
// heroPower.heyPankaj();

/**
 * inheritance
 */

const user = {
    name : "username",
    email : "user@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user; // old syntax

Object.setPrototypeOf(TeachingSupport, Teacher); // modern syntax

/**
 *  another custom method
 */

let anotherUsername = "pankajghosh       ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"pankaj".trueLength();
"javascript".trueLength();