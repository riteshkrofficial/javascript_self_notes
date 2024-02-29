// chay with code 

// objecs is declared by two types :
// litrals  and constructor 
// On declaring object like litrals it will not act like singlton
//on declaring object like constructor it wil act like singleton that is one object 

// object through constructor => object.create
//here we will not talk about constructor way 


//object litrals 
// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     age: 18,
//     //[mySym]:"mykey1",  //sq bracket used means outside access of symbol otherwise inside
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }                                    
//object created  
//majorly people access the object  attributes as shown below using '.'
// but it can also be accessed through square bracket too but here you have to specify 
// its features example in code 

//console.log(JsUser.age);
//console.log(JsUser["location"]) // line 23,24 specify the string type using inverted commaas 

//benefits of square brakets it can access the data for always 
//like  fullname attrubute with space full name is also in inverted comma cannot be accessed by '.' way ex below=>
// console.log(JsUser.full name)    //not accessible
// console.log(JsUser["full name"]); //accessible
// console.log(JsUser["email"])      without '.' again need inverted comma

// console.log( typeof JsUser[mySym]) //accessing the symbol tha is defined above outside object 

// console.log( typeof JsUser.mySym)  // accessing the symbol tha is defined inside object 

// JsUser.email = "hitesh@chatgpt.com"   //the attribute can be rewriiten like this and it take the latest updated value 
//  Object.freeze(JsUser)                //it freezess the object no further updation
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


// function use  and call in javascript 

// JsUser.greeting = function(){
//     console.log("hello js user")
// }

// console.log(JsUser.greeting);   //function execute nhi hua 

// console.log(JsUser.greeting());  //function execute hua 

// Now we have to refrence the name from the object in using function 
// JsUser.greetingtwo = function(){
//     console.log(`hello how are you,${this.name}`)
// }
// console.log(JsUser.greetingtwo());















// $$$$$$$$$$$$$$$$$$ NEXT LECTURE ON OBJECTS PART-2
//constructor or singlton way of defining object in js
//const tinderUser = new Object()  //for singleton  object 
//here defining object thruogh constructor  way 

// const tinderUser={}
// tinderUser.id = "43rsfdg"
// tinderUser.name="ritesh"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)


// const regularUser = {
//       email: "some@gmail.com",
//       fullname: {
//           userfullname: {
//               firstname: "hitesh",
//               lastname: "choudhary"
//           }
//       }
//   }
  
//    console.log(regularUser.fullname.userfullname.firstname);




// multiple object storing

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 } 
// console.log(obj3); yha sare object with curly braket aaenge example=> {obj1:{},obj2{}}



// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}
 //const obj5 = Object.assign( {},obj1, obj2, obj4)
//console.log("{} me ho gye saare store:",obj5)
//yha pr obj5 me saare value aa gye or {} me saare value chle gye jon ki new obj me store hom gye 

// or you can do one more way that is use other variable instead of {}
// const h1 = {1: "a", 2: "b"}
// const h2 = {3: "a", 4: "b"}
// const h3 = {5: "a", 6: "b"}
//  const h4 = Object.assign(h1,h2,h3)

//  console.log(h4)
//  console.log(h1)
//  console.log(h2)
//  console.log(h3)
//  console.log(h1)


// or another way of combing different objectin a single object way mostly used

// const obj3 ={...obj1,...obj2,...obj4 }    //spread operator 
// console.log(obj3)






//&&&&&&&&&    DESTRUCTURING OF OBJECT  ANOTHER LECTOR 3RD ON OBBJET

// const course ={
//     coursename:"js in hindi",
//     price:"999",
//     courseInstructor:"Ritesh"
// }
//console.log(course.courseInstructor);


// another way of extracting above object value by distructuring of data  :
// syntax:
//  const{attributeName:giveAnyName} = objectName
//  console.log(attributeName)
// say ex:
 //const{price:p} = course
// console.log(price)
//console.log(p)  
//  destructured the attribute name as given in line 151




//$$$$$$$$$$$  API  CONCEPT IN JS 
//api can be of both formate that is array and object,
//JSON talk (Javascript object notation) 
