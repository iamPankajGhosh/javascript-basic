/**
 * map
 */

const myNum = [1, 2, 3, 4, 5];

const newNum = myNum.map( (num) => num +10 ).map((num) => num +2).filter( (num) => num > 15)
console.log(newNum);
