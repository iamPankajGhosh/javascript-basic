/**
 * function
 */

function myName() {
    console.log("p");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("a");
    console.log("j");
}

myName();

// function addTwoNumber(num1,num2) {
//     console.log(num1 + num2);
// }

function addTwoNumber(num1,num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result = addTwoNumber(10,20);
console.log("Result : ",result);

function loginUserMessage (userName = "john"){
    if(!userName){
        console.log("please enter username");
        return;
    }
    return`${userName} just logged in`;
}

console.log(loginUserMessage());

//rest operator

function calculateCartPrice(...num) {
    return num;
}

console.log(calculateCartPrice(100,200,300,400,500));

// handle object in function
const user = {
    username : "pankaj",
    price : 399
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

// handle array in function

const array = [100, 200, 300, 400];

function returnSencondValue(getArray) {
    return getArray[1];
}

console.log(returnSencondValue(array));