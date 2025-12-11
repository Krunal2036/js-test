// primitive
// 7 type = string, number, boolean, bigInt, null, undefined, symbol

const number = 100;
const subnumber = 100.3;
const string = "hetesh";
const isLoggedIn = true;
const temp = null;
let userEmail;
const bigInt = 123544n;
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// non primitive (reference)
// array, object, function

const city = ["rajkot", "ahemdabad", "jamnagar", "morbi", "surat"];
let obj ={
    name:"krunal",
    age: 21,
}

const myFuntion = function(){
    // console.log("hello world!");
}

// *********************Stack(primitive) & Heap(non-rpimitive)*******************************

let myCode = "democode"
let coder = myCode
coder = "coder"

console.log(myCode);
console.log(coder);

let user = {
    email : 'user@g.com',
    userUpi: 'user@xyl'
}
let user2 = user
console.log(user2);
