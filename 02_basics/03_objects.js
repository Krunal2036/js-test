
const Sym = Symbol("id");

const obj = {
    name:"krunal",
    "Full Name": "krunal rangani",
    age:24,
    address:{city:"surat",state:"gujarat"},
    email:"krunal@gmail.com",
    // jssym : Sym // symbol property
    [Sym]: "id"
}

// console.log(obj["Full Name"], obj.address.city,obj[Sym]);
// console.log(typeof obj[Sym]);

obj.email = "krunal@google.com"
// Object.freeze(obj)
// obj.age = 30
// console.log(obj);

obj.greeting = function(){
    console.log(`Hello, My name is ${this.name}`);
}
console.log(obj.greeting);
console.log(boj.greeting());

//***************Object method **************//