// task 1
const number = 5;
if (number > 0) {
  console.log("Positive");
} else if (number === 0) {
  console.log("Zero");
} else {
  console.log("Negetive");
}

// task 2
const age = 18;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("not eligible to vote");
}

// task 3
const numberOne = 10;
const numberTwo = 20;
const numberThree = 30;

if (numberOne > numberTwo && numberOne > numberThree) {
  console.log("Largest number : ", numberOne);
} else if (numberTwo > numberThree) {
  console.log("Largest number : ", numberTwo);
} else {
  console.log("Largest number : ", numberThree);
}

// task 4
const day = 1;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

// task 5
const score = 90;

switch (true) {
  case score > 80:
    console.log("grade : A");
    break;
  case score > 60:
    console.log("grade : B");
    break;
  case score > 40:
    console.log("grade : C");
    break;
  case score > 25:
    console.log("grade : D");
    break;
  case score <= 25:
    console.log("grade : F");
    break;
  default:
    console.log("Invalid score");
}

// task 6
const checkNumber = 5;
console.log(checkNumber % 2 === 0 ? "even number" : "odd number");

// task 7
const year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
}
