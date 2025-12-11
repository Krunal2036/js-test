const myArr = [0,1,2,3,4,5]
const myHero = ["ram", "krishna", "shiva"]
const myArry = new Array("a","b","c","d")

//***************Array method **************//

myArr.push(6)
myArr.push(7)
myArr.pop()
// console.log(myArr);

myArr.unshift(9)
myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

const newArry = myArr.join()
// console.log(newArry); //=>convert an array in to a string.

console.log("A", myArr);
console.log(myArr.slice(1,3));
console.log("B",myArr);
console.log(myArr.splice(1,3));
console.log("c",myArr);
