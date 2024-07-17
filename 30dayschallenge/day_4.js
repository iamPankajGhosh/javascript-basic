// task 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// task 2
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

// task 3
let sum = 0;
let num = 1;

while (num <= 10) {
  sum += num;
  num += 1;
}

console.log("result : ", sum);

// task 4
let startNum = 10;

while (startNum >= 1) {
  console.log(startNum);
  startNum -= 1;
}

// task 5
let otherNum = 1;
do {
  console.log(otherNum);
  otherNum += 1;
} while (otherNum <= 5);

// task 6
let factorialOf = 5;
let i = 1;
let result = 1;

do {
  result *= i;
  i++;
} while (i <= factorialOf);

console.log("result : ", result);

// task 7
let pattern = "";

for (let lineNum = 1; lineNum <= 5; lineNum++) {
  pattern += " *";
  console.log(pattern);
}

// task 8
for (let num = 1; num <= 10; num++) {
  if (num === 5) {
    continue;
  }
  console.log(num);
}

// task 9
for (let num = 1; num <= 10; num++) {
  if (num === 7) {
    break;
  }
  console.log(num);
}
