const user = {
    name: "krunal",
    age: 24,
    greet: function() {
        // console.log(`Hello ${this.name}, you are ${this.age} years old.`);
        // console.log(this);
        
    }
}
// console.log(user.name);
// user.greet();
// user.name = "john";
// console.log(user.name);
// user.greet();


// ---------------------------------------------------------------------------------------------------------
// console.log(this);
// ---------------------------------------------------------------------------------------------------------


// function one() {
//     console.log(this);
// }
// one();

const two = function(){
    console.log(this);
}

//***************Arrow Function **************//

// const three = (a, b) => {
//    return a + b;
// }

// const three = (a, b) => a + b;
const three = (a, b) => (a + b);
console.log(three(2,3));

const obj = () => ({name: "krunal", age: 24});
console.log(obj());
