const user = {
    name : 'krunal',
    age : '21',
    details : function() {console.log(`username : ${this.name}`);
    }
}
// console.log(user);
// console.log(user.details());

 function User(username, logincount, issignedin,greeting){
    this.username = username;
    this.logincount = logincount;
    this.issignedin = issignedin;
 }

 const user1 = new User ('krunal', 21, true);
    console.log(`Username : ${user1.username}, login Count : ${user1.logincount}, is Signed In : ${user1.issignedin}`);
const user2 = new User ('akash', 18, false);
    console.log(`Username : ${user2.username}, login Count : ${user2.logincount}, Is Singed In : ${user2.issignedin}`);
