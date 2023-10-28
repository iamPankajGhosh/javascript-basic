/**
 * filter
 */
const myNumber = [1, 2, 3, 4, 5];

const newNums = myNumber.filter( (nums) => nums > 3);
console.log(newNums);

const myArr = [];
myNumber.forEach( (num)=>{
    if(num > 2){
        myArr.push(num);
    }
});

console.log(myArr);