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