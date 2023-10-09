let score = undefined;

console.log(score);
console.log(typeof score);

let valueInNumber = Number(score);

console.log(valueInNumber);
console.log(typeof valueInNumber);

/**
 * conversion in number
 */

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1 / false => 0
// null => 0
// undefined => NaN

/**
 * string operation
 */

let str1 = "hello";
let str2 = " pankaj";

let str3 = str1 + str2;

console.log(str3);

/**
 * postfix & prefix increament
 */

// postfix increament
let x = 3;
const y = x++;

console.log(x);
console.log(y);

// prefix increament
let a = 3;
const b = ++a;

console.log(a);
console.log(b);