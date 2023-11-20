/**
 * call
 */

function setUsername(username) {
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const pankaj = new createUser("pankaj", "pankaj@gmail.com", "123");

console.log(pankaj);