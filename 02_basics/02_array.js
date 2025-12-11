const gods = ["shiva","vishnu","brahma"]
const goddes = ["shakti","lakshmi","brahmani"]

// gods.push(goddes)
// console.log(gods);

// const allGods = gods.concat(goddes)
// console.log(allGods);

const allGods = [...gods, ...goddes]
// console.log(allGods);

const arry = [1,2,3,[4,5],6,[7,[8,9]],10]
const flatarry = arry.flat(Infinity)
// console.log(flatarry);

// console.log(Array.isArray("krunal"));
// console.log(Array.from("krunal"));
// console.log(Array.from({name:"krunal"}));

let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1,sc2,sc3));
