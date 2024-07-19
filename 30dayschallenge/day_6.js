// task 1
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// task 2
console.log("First element of numbers array :", numbers[0]);
console.log("Last element of numbers array :", numbers[numbers.length - 1]);

// task 3
numbers.push(6);
console.log(numbers);

// task 4
numbers.pop();
console.log(numbers);

// task 5
numbers.shift();
console.log(numbers);

// task 6
numbers.unshift(1);
console.log(numbers);

// task 7
const newNumbers = numbers.map((num) => num * 2);
console.log("arry of doubles :", newNumbers);

// task 8
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// task 9
const sumOfAllNumbers = numbers.reduce((prevNum, curNum) => {
  return prevNum + curNum;
}, 0);
console.log("sum of all numbers :", sumOfAllNumbers);

// task 10
for (let num of numbers) {
  console.log(num);
}

// task 11
numbers.forEach((num) => {
  console.log(num);
});

// task 11
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row of matrix) {
  console.log(row);
}

const rowIndex = 1;
const colIndex = 2;
const element = matrix[rowIndex][colIndex];

console.log(
  "Element at row",
  rowIndex + 1,
  "and column",
  colIndex + 1,
  "is:",
  element
);
