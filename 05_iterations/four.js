const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => num % 2 === 0);
// console.log(newNum);

const Books = [
  { title: "Book One", author: "Author A", year: 2001 },
  { title: "Book Two", author: "Author B", year: 1995 },
  { title: "Book Three", author: "Author C", year: 2010 },
  { title: "Book Four", author: "Author D", year: 1988 },
];

const recentBooks = Books.filter((book) => book.year >= 2000 || book.author === "Author B");
// console.log(recentBooks);

//--------------------------------------------- map method example


const myarry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myarry.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 41);
// console.log(newNum);

// const newNum1 = myarry.filter((num) => num % 2 === 0);
// console.log(newNum1);

// --------------------------------------------reduce method example

const myArray = [1, 2, 3];

const sum = myArray.reduce((acc, crrVal) => acc + crrVal, 0);
console.log(sum);

const corsces = [
  { name: "Course 1", price: 100 },
  { name: "Course 2", price: 200 },
  { name: "Course 3", price: 300 },
];

const totalPrice = corsces.reduce((acc, course) => acc + course.price, 0);
console.log(totalPrice);