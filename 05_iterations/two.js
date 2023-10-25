/**
 * while loop
 */

let index = 0;
while (index <= 10) {
    console.log(`index value is ${index}`);
    index = index + 2;
}

const myArr = ["flash", "batman", "superman"];
let arr = 0;

while(arr < myArr.length){
    console.log(myArr[arr]);
    arr++;
}

/**
 * do while loop
 */

let score = 1;
do {
    console.log(`Score is : ${score}`);
    score++;
} while (score <= 10);