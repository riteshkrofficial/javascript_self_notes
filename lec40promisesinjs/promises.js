//most operataion of promises are consumed
//how promises are made lets know 
//created different promises 
// const promiseOne = new Promise(function(resolve, reject){
    //do an asyn task
    //db calls, cryptography, network
//     setTimeout(function(){
//      console.log('Async task is complete');
//      resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed ");
// })

// //without declaring it in any variable 
// promise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2')
//         resolve()
//     },1000)}).then(function(){
//         console.log('Asynk 2 is resolved ');
//     })

  //passing  the  data in resolve call
    // const promise3 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         resolve({username: "Chai", email:"chai@example.com"})
    //     },1000)
    // }).then(function(user){
    //   console.log(user);
    // })






// const promise4 = new Promise(function(resolve,reject){
//      setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"Ritesh", password:"123"})
//         }else{
//             reject("ERROR: SOMETHING WENT WRONG")
//         }
//      },1000)
// })

// promise4.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//   console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("promise is either resolved or rejected"))

   


// In this promise5  instead .then , .catch we will use async ,await which is 
    // also used
// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error) {
//             resolve({username:"javascript", password:"123"})
//         }
//         else{
//             reject ("ERROR :JS went wrong")
//         }
//     },1000)
// })

// //using async await here 
// async function consumepromise5(){
//     try {
//         const response = await promise5
//     console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumepromise5()
// both promise4 and promise5 are same with use of different way   
// in promise4 .then,   .catch is used
// in promise5 async and await is used