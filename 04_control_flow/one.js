/**
 * control flow
 */

// if statement
if(2 == "2") {
    console.log("executed");
}

if(2 === "2") {
    console.log("executed");
}

// if-else statement
const temp = 41;
if(temp < 50){
    console.log("less than 50");
}
else {
    console.log("temp is greater than 50");
}

const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`user power is : ${power}`);
}

// console.log(power);

const balance = 1000;

if(balance > 500) console.log("test"),console.log("test2"); // bad practice

// nested if-else

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

// multiple condition

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}