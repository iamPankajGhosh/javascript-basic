// const promiseOne = new Promise(function(resolve, reject){
//     //DB calls
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// /**
//  * another way
//  */

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve();
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// /**
//  * another way
//  */

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async three done");
//         resolve({
//             username : "pankaj",
//             email : "pankaj@gmail.com"
//         });
//     }, 1000);
// });

// promiseThree.then(function(user){
//     console.log(user);
// });

/**
 * another way
 */

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username : "pankaj",
                password : "1234"
            })
        } else {
            reject("ERROR : Something went wrong");
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

/**
 * another way
 */

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username : "javascript",
                password : "1234"
            })
        } else {
            reject("ERROR : JS went wrong");
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

/**
 * implementation
 */

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
    } catch (error) {
       console.log("Error : ", error); 
    }
}

getAllUsers();

/**
 * another implementation
 */

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})