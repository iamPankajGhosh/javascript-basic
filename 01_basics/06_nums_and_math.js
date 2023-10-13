/**
 * number datatypes
 */

const score = 400;
const balance = new Number(100);
console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.9678;
console.log(otherNumber.toPrecision(3));

const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN"));