// class User{
//     constructor(userName, email, password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }
//     enctryptpassword(){
//         return `****${this.password}****`;
//     }
//     changeusername(username){
//         console.log(`${this.userName.toUpperCase()}`);
//     }
// }

// const user = new User('krunal', 'krunal@example.com', '12345');
// // console.log(user);
// console.log(user .enctryptpassword());
// user.changeusername();

// behind the scenes

function User(userName, email, password){
    this.userName = userName;
        this.email = email;
        this.password = password;
}

User.prototype.enctryptpassword = function(){
        return `****${this.password}****`;
    }
User.prototype.changeusername = function(username){
        console.log(`${this.userName.toUpperCase()}`);
    }

 const user = new User('rangani', 'rangani@example.com', '12345');
// // console.log(user);
console.log(user .enctryptpassword());
user.changeusername();