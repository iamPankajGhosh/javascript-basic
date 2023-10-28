/**
 * reduce
 */
const myArr = [1, 2, 3, 4, 5];

const total = myArr.reduce((acc,curr)=>{
 return acc + curr;
},0);

console.log(total);