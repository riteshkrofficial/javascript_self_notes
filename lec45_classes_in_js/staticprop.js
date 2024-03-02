class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }

   static createId(){  //once static keyword is used in method/function it do not allow to access any class or inherit any child 
        return `123`
    }
}

const hitesh = new User("hitesh")
 console.log(hitesh.createId())  //not accessed through direct class due to static keyword

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
console.log(iphone.createId()) //not accessible as static keyword is used above (child try to access but cannot)