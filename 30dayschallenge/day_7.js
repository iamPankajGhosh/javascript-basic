// task 1
const book = {
  title: "Eloquent JavaScript, 3rd edition",
  author: "Marjin Haverbeke",
  year: "2017",
  printInfo: function () {
    return "The book is" + this.title + "and author is " + this.author;
  },
  updateYear: function (year) {
    book.year = year;
  },
};
console.log(book);

// task 2
console.log("title :", book.title);
console.log("author :", book.author);

// task 3
console.log(book.printInfo());

// task 4
book.updateYear("2018");
console.log(book);

// task 5
const library = {
  name: "library",
  books: [
    {
      title: "book1",
      year: "2017",
    },
    {
      title: "book2",
      year: "2018",
    },
  ],
};
console.log(library);

// task 6
console.log("name of library is :", library.name);
console.log(
  "Books :",
  library.books.map((book) => {
    return book.title;
  })
);

// task 7
for (let b in book) {
  console.log("book", b, "is", book[b]);
}

// task 8
console.log("all keys of book object is :", Object.keys(book));
console.log("all values of book object is :", Object.values(book));
