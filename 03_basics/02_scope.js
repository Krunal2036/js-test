// var a = 20;
let b = 30;
const c = 40;      

if (true) {
    // var a = 5;
    let b = 10;
    const c = 15;

//     console.log("Inside block scope:", a); // 5
//     console.log("Inside block scope:", b); // 10
//     console.log("Inside block scope:", c); // 15
}

//     console.log("Globel scope:", a); // 5
//     console.log("Globel scope:", b); // 10
//     console.log("Globel scope:", c); // 15


function one () {
    const name = "krunal";
    function two() {
        const age = 24;
        // console.log(`username is ${name} and age is ${age}`);
    }
    // console.log(`my name is ${name}.`);
    
    two();
}
//  console.log(`my name is ${name}.`); // Error: name is not defined out of function one
one();

if (true) {
    const fruit = "apple";
    if (fruit === "apple") {
        const logger = "red fruit";
        // console.log(fruit); 
        // console.log(logger); 
    }
    // console.log(logger); 
}
// console.log(fruit); 

/*****************************************intresting****************************************/
addone(5);
function addone(num) {
    return num + 1;
}
// addone(5);
// console.log(addone(5)); // 6

// addtwonum(5); // Error: Cannot access 'addtwonum' before initialization
const addtwonum = function(num){
    return num + 2;
}
addtwonum(5);
// console.log(addtwonum(5)); // 7