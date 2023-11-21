class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const pankaj = new User("pankaj");
// console.log(pankaj.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const phone = new Teacher("phone", "phone@gmail.com");
// console.log(phone.createId());