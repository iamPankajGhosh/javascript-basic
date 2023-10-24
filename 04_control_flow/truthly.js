const userEmail = "pankaj@gmail.com";

if(userEmail) {
    console.log("got user email");
}
else {
    console.log("don't have user email");
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
//"0", "false", " ", [], {}

//check empty array
const arry = [];
if(arry.length === 0){
    console.log("this is a empty arry");
}

//check empty object
const object = {};
if(Object.keys(object).length === 0){
    console.log("this is a empty object");
}
