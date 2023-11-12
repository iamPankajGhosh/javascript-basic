const promiseOne = new Promise(function(resolve, reject){
    //DB calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
})

/**
 * another way
 */

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

/**
 * another way
 */

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async three done");
        resolve({
            username : "pankaj",
            email : "pankaj@gmail.com"
        });
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});