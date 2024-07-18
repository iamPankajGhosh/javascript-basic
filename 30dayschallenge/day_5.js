// task 1
function checkOddEven(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

checkOddEven(11);

// task 2
function sqrt(num) {
  return num * num;
}

const result = sqrt(6);
console.log(result);

// task 3
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log("max :", max(30, 20));

// task 4
function concate(str1, str2) {
  return str1 + str2;
}

console.log(concate("hello ", "world"));

// task 5
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log("result :", sum(5, 5));

// task 6
const includes = (str, char) => {
  for (let c of str) {
    if (c === char) {
      return true;
    }
  }
  return false;
};

console.log(includes("hello", "p"));

// task 7
const multiply = (num1, num2 = 1) => {
  return num1 * num2;
};

console.log(multiply(10, 5));
console.log(multiply(10));

// task 8
const greet = (name, age = 18) => {
  const str = "hello " + name + " age:" + age;
  return str;
};

console.log(greet("one", 22));

// task 9
const print = (fn, repeatValue) => {
  for (let i = 1; i <= repeatValue; i++) {
    fn();
  }
};

print(() => {
  console.log("hello");
}, 6);

// task 10
const newResult = (fn, fn1, num) => {
  const value = fn(num);
  const result = fn1(value);
  return result;
};

console.log(
  newResult(
    (num) => {
      return num + 2;
    },
    (value) => {
      return value * 3;
    },
    10
  )
);
