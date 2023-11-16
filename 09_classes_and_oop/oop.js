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