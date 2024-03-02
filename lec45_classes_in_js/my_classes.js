// //   ES6
// //no need of creating object and function in class 
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPasssword(){
        return `${this.password}abc`
    }

    changeUsername(){

        return `${this.username.toUpperCase()}`

    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPasssword());
console.log(chai.changeUsername());


//BEHIND THE SCENE  (without using class)
function User(username, email, password){
    this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPasssword = function(){
    return `${this.password}abcd`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPasssword());
console.log(tea.changeUsername());

