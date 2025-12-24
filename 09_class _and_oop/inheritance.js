class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe(){
        console.log(`User Name is: ${this.userName}`);
    }
}

class Admin extends User {
    constructor(userName, email, password){
        super(userName);
        this.email = email;
        this.password = password;
    }

    chackAtendance(){
        console.log(`${this.userName} is presant in a meeting.`);
    }
}

const user = new Admin('krunal', 'krunal.example.com', '1234');
user.chackAtendance();

const normalUser = new User('rangani');
normalUser.logMe();

console.log(user instanceof User);
