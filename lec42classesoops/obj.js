// object literal

// const user ={

// //properties
//     username:"hitesh",
//     logicCount:8,
//     signedIn:true,

//     //method
//     getUserDetails: function(){
//         console.log("Got user detail for database")
//         console.log(`Username: ${this.username}`);
//         console.log(this);  
//     }

// }


// console.log(user.username)  //function call hone se phle print ye hoga 
// console.log(user.getUserDetails())




//instead of writing always new user and separatly adding their different properties lets create a function with all
// the properties embedded in it only the needed value will be passed

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.goodies = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this  
}

const userOne =new User("Ritesh",12,true);
// const userTwo =new User("Rahul",17,false);
console.log(userOne.constructor);
// console.log(userTwo);

//IN above code of js use of "new" keyword =>Actually construuctor function gives new instances when called using new keyword 
//if new keyword is not used in above code then return this is mandatory to use and u will se code overriding that is as soon as we 
//print userTwo, userOne data is overwritten with user two becoz no new instace is created here  

//NEW keyword imp points 
//As soon as new keyword is used an empty object is created which is called as instance,
//1 so new object is created 
//2 constructor function is called becoz of new keyword (it collects all the argument and give it to u)
//3 all the arguments are injected in tis keyword 
//4 all the req tings are availabe in function 


// what is constructor property =>It is defined as the reference about the user itself (that is the object which is creted )