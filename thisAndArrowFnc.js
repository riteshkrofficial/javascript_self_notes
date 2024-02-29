// lecture 23

// this keyword  and arrow function 

const user ={
    username: "Ritesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)           //this keyword used in current context
    }
     
}

// user.welcomeMessage()   //Ritesh , welcome to website
// user.username="sam"    
// user.welcomeMessage()   //  sam , welcome to website
//above username in which this keyword is used is not hardcoded changes with redeclaring

// console.log(this);
  
// down one we cannot use this keyword inside a function  like below 
// we can use this keyword inside object like above code starts from line 5
     // ^ 
     // |
// function chai(){
//     let username ="hitesh"
//     console.log(this.username)
// }
// chai()

// another way of defining the function is like above 
// const chai = function(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()

// es6 change way that remove function keyword and use the arrow 
// example of above function in arrrow function formate
// const chai = () =>{
//     let username = "ritesh"
//     console.log(this.username)
// }
// chai()




