const setUserName = function(username){
    this.username = username;
}

const getUser = function(username, email, password){
    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}

const user = new getUser('krunal', 'krunal@example.com', '12345');

console.log(user);
