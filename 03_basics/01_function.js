// function addtonum(a, b) {
//    console.log( "sum = ", a + b);
// }
// addtonum(5, 10);

//***************Function with return type **************//

function addtonum(a, b) {
    // let sum = a + b;
    // return sum;
   return(a + b);
}
// console.log(addtonum(5, 10));
const sum = addtonum(5, 10);
// console.log(sum);

//***************Function with default parameter **************//

function loginUserMessage(userName) {
    if (!userName) {
        return "Please enter a valid username";
    }
    return `Welcome back ${userName}`;
}
// console.log(loginUserMessage("krunal"));
// console.log(loginUserMessage());



//***************Function Expression **************//


function calculatecartprice(...num1) {
    return num1;
}
// console.log(calculatecartprice(500,200,100,50));

const user = {
    name: "krunal",
    ages: 24
}

function handelobject(anyobject) {
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}
handelobject(user);
handelobject({name: "john", age: 30});

const myArray = [1, 2, 3, 4, 5];

function printarrayelements(getarray) {
    return getarray[1];
}
console.log(printarrayelements(myArray));
console.log(printarrayelements([10, 20, 30, 40, 50]));