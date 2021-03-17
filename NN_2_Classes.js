class User {
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(`${this.email} has logged in ..`)
    }
    logout(){
        console.log(`${this.email} has logout ..`)
    }
}


const userOne = new User('lakshy@mail.com','Lakshy');
const userTwo = new User('lakshy2@mail.com','Lakshy2');
console.log(userOne);
console.log(userTwo);
userOne.login();
userTwo.logout();

