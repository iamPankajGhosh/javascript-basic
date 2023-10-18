/**
 * constructor
 */

const newObj = new Object();
newObj.name = "pankaj";
newObj.id = "123abc";
newObj.isLoggedIn = false;
console.log(newObj.name);

// nested object
const regularUser = {
    email : "pankaj@gmail.com",
    "full name" : {
        userName : {
            firstName : "pankaj",
            lastName : "ghosh"
        }
    }
}

console.log(regularUser["full name"].userName.lastName);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = Object.assign({},obj1,obj2);// object concatinate
// console.log(obj3);

const obj3 = {...obj1, ...obj2};// object concatinate
console.log(obj3);

// object methods
console.log(Object.keys(newObj));
console.log(Object.values(newObj));
console.log(Object.entries(newObj));
console.log(newObj.hasOwnProperty("isLoggedIn"));