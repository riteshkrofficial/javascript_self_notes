class User{
   constructor(email, password){
    this.email = email;
    this.password = password
   }

   get email(){
        return this._email.toUpperCase()
   }


   set email(value){
    this._email = value
   }



   get password(){
    //   return this._password.toUpperCase()
         return `${this._password}ritesh`
   }

   set password(value){
        this._password = value
   }
}

const ritesh = new User("r@ritesh.ai", "abc")
console.log(ritesh.password);
console.log(ritesh.email);
