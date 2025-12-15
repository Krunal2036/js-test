// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "krunal";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//***************Object method **************// 
const regularUser = {
    email: "ksr@g.com",
    fullname: {
        userFullname: "krunal rangani"
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullname.userFullname);

//***************Object with method **************//
const obj1 = {1:"a", 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e", 6:"f"};

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); 


const obj4 = {...obj1, ...obj2};
// console.log(obj4);  

//***************Object destructuring **************//
// const myUser = {
//     userId: "abc123",
//     userName: "krunal",
//     userEmail: ""};

// const {userId, userName, userEmail} = myUser;
// console.log(userId);
// console.log(userName);
// console.log(userEmail);
 
const myUser = [
    {userId: "abc123",
    userName: "krunal"
    },
    {userId: "def456",
    userName: "ram"
    },
    {userId: "ghi789",
    userName: "sham"
    },
]
myUser[1].userName; // "ram"

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));

const course = {
    courseName: "js basics",
    price: 999,
    courseInstructor: "krunal",
}

const {courseName, price, courseInstructor :Instructor } = course;
console.log(courseName);
console.log(price);
console.log(Instructor);