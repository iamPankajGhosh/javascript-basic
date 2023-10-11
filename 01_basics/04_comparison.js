/**
 * comparison
 */

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2!=1);
console.log(2==1); // equality check

// tricky comparison
console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0); // equality check
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0); // equality check
console.log(undefined >= 0);

console.log("2" === 2); // strict check 

/** avoid this type of tricky conversion */