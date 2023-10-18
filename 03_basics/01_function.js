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