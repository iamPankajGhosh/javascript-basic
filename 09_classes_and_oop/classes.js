/**
 * ES6 classes
 */

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const pankaj = new User("pankaj", "pankaj@gmail.com", "1234");

console.log(pankaj.changeUsername());
console.log(pankaj.encryptPassword());

/**
 * behind the scene
 */

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const pankaj1 = new User("pankaj1", "pankaj1@gmail.com", "123");

console.log(pankaj1.changeUsername());
console.log(pankaj1.encryptPassword());