// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('Promise 1 resolved');
//         resolve();
//     }, 1000);
// });
// promise1.then(() => {
//     // console.log('Promise 1 consumed');
// });

// -----------------------------------------------------------

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise 2 resolved');
//         resolve();
//     }, 1000);
// })
// .then(() => {
//     console.log('Promise 2 consumed');
// });

// -----------------------------------------------------------

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({username: 'john_doe', age: 25});
//     },1000)
// });
// promise3.then((user)=>{
//     console.log(user);
    
// });

// -----------------------------------------------------------

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;
//         if(success){
//             resolve({username: 'john_doe', age: 25});
//         }else{
//             reject('Operation failed');
//         }
//     }, 1000);
// });

// promise4
//     .then((user)=>{
//         console.log(user);
//         return user.username;
//     })
//     .then((username)=>{
//         console.log(username);
//     })
//     .catch((error)=>{
//         console.log('Error:', error);
//     }).finally(() => {
//         console.log('Promise 4 settled');
//     });

// -----------------------------------------------------------

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false;
//         if(!success){
//             resolve('Operation succeeded');
//         }else{
//             reject('Operation failed');
//         }
//     }, 1000);
// })

// async function handlePromise5(){
//     try {
//         const msg = await promise5;
//         console.log(msg);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// handlePromise5();

// -----------------------------------------------------------

// async function fetchData(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error){
//         console.log('Error fetching data:', error);
//     }
// }
// fetchData();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return  response.json()
    })
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log(error);
    })