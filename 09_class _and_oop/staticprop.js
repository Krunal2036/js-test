class User{

    constructor(name){
        this.name = name;
    }

    logMe(){
        console.log(`User Name: ${this.name}`);
    }

    static creatId(){
        return Math.floor(Math.random() * 10000);
    }
}

const user1 = new User ('krunal')
const user2 = new User ('john')

user1.logMe();
user2.logMe();

// console.log(user1.creatId());
console.log(User.creatId());
console.log(User.creatId());
