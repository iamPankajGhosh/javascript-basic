/**
 * arrays
 */

const myArr = [1,2,3,4,5];
console.log(myArr);

const myArr2 = new Array(1,2,3,4);
console.log(myArr2);

// array methods
myArr2.push(5);// add new element in array at last position
console.log(myArr2);

myArr2.pop();// remove element in array from last position
console.log(myArr2);

myArr2.unshift(0);// add new element in array at first position
console.log(myArr2);

myArr2.shift();// remove element in array from first position
console.log(myArr2);

console.log(myArr.includes(9));// check the element present in the array or not

console.log(myArr.indexOf(4));// check th element's position in the array

console.log(myArr.join());// convert array into a string

// slice and splice
console.log("A",myArr);

const myNewArray = myArr.slice(0,3);// make new array including main array elements
console.log("B",myNewArray);

const myNewArray2 = myArr.splice(0,3);// make new array cut main array elements
console.log("A",myArr);
console.log("C",myNewArray2);