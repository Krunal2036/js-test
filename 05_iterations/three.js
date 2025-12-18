//------------------------------------------- for of

// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
// //   console.log(num);
// }

// const fruits = ["apple", "banana", "orange"];
// for (const fruit of fruits) {
// //   console.log(fruit);
// }

// const greeting = "Hello";
// for (const char of greeting) {
// //   console.log(char);
// }

// const map = new Map();
// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);

// for (const [key, value] of map) {
// //   console.log(`${key}: ${value}`);
// }

//------------------------------------------------ for in
// const person = {
//   name: "Alice",
//   age: 30,
//   city: "New York"
// };
// for (const key in person) {
//     // console.log(`${person.name} is live in ${person.city} and her age is ${person.age}`);
// }

// for(const key in person) {
//     // console.log(`${key}: ${person[key]}`);
// }

// const arr = [10, 20, 30];
// for (const index in arr) {
// //   console.log(`Index: ${index}, Value: ${arr[index]}`);
// }

//--------------------------------------------- foreach
let colors = ["red", "green", "blue"];

// colors.forEach((clr)=>{
//     // clr = "dark "+clr;
//     console.log(clr);
// });

// function printColor(color, index) {
//     console.log(`Color at index ( ${index} ) is ( ${color} )`);
// }

// colors.forEach(printColor);

arryObjects = [
    {id: 1, name: "item1"},
    {id: 2, name: "item2"},
    {id: 3, name: "item3"},
];

arryObjects.forEach((obj)=>{
    console.log(`Id is ( ${obj.id} ) and Name is ( ${obj.name} )`);
});