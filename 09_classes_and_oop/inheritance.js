/**
 * inheritance
 */

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher = new Teacher("teacher", "teacher@gmail.com", "123");

teacher.addCourse();

const tea = new User("tea");

tea.logMe();

console.log(teacher instanceof User);