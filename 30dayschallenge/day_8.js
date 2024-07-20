// task 1
const name = "one";
const age = 18;
console.log(`the person's name is ${name} and his age is ${age}`);

// task 2
console.log(`the person name is ${name}. \nhis age is ${age}`);

// task 3
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(`first number is ${first} and second number is ${second}`);

// task 4
const book = {
  title: "Eloquent JavaScript, 3rd edition",
  author: "Marjin Haverbeke",
};

const { title, author } = book;
console.log(`the book is ${title} and author is ${author}`);

// task 5
const newBookDetails = {
  ...book,
  year: 2018,
};
console.log(newBookDetails);

// task 6
const sum = (...num) => {
  return num.reduce((prev, curr) => prev + curr, 0);
};
console.log(sum(1, 2, 3));

// task 7
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(6));
console.log(multiply(6, 6));

// task 8
const newBooktitle = "You Don't Know JS";
const newBookAuther = "Kyle Simpson";
const newBookYear = "2018";

const newBook = {
  newBooktitle,
  newBookAuther,
  newBookYear,
  printInfo: function () {
    console.log(`book name is ${newBooktitle} and author is ${newBookAuther}`);
  },
};
console.log(newBook);

// task 9
const propName1 = "title";
const propName2 = "author";
const propName3 = "year";

const anotherBook = {
  [propName1]: "JavaScript: The Good Parts",
  [propName2]: "Douglas Crockford",
  [propName3]: "2008",
};
console.log(anotherBook);
