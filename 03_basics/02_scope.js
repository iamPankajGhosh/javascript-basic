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

// nested scope
function one(){
    const username = "pankaj";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

if(true){
    const username = "pankaj";
    if(username === "pankaj"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(webiste);
}
// console.log(username);

// mini hoisting
console.log(addOne(5));

function addOne(num){
    return num + 1;
}

// console.log(addTwo(5));

const addTwo = function(num){
    return num + 2;
}
