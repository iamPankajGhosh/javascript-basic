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
})