/**
 * object literal
 */

const user = {
    username : "pankaj",
    logInCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`username : ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

/**
 * constructor function
 */

function User(username, logInCount, signIn) {
    this.username = username;
    this.loglogInCount =logInCount;
    this.signIn = signIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    };

    return this;
}

const userOne = new User("raj", 12, true);

// step 1 : create new empty object for THIS keyword
// step 2 : call constructor function for NEW keyword and packed all those argument
// step 3 : inject all those packed argument inside THIS
// step 4 : finally get this object

const userTwo = new User("jim", 11, false);

console.log(userOne);
console.log(userTwo);