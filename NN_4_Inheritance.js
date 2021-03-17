class User {
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(`${this.email} has logged in ..`)
        return this; //it will return the instance of the object for that particular user so that we can do another method on the user.
    }
    logout(){
        console.log(`${this.email} has logout ..`);
        return this; //it will return the instance of the object for that particular user so that we can do another method on the user.
    }
    updateScore(){
        this.score++;
        console.log(`${this.email} has a current score of ${this.score}`);
        return this; //it will return the instance of the object for that particular user so that we can do another method on the user.
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email; //if email matches that false returned and the ek=lement will be deleted.
        })
    } 
}

const userOne = new User('lakshy@mail.com','Lakshy');
const userTwo = new User('lakshy2@mail.com','Lakshy2');
const admin = new Admin('lakshyadmin@gmail.com','Lakshy3');
let users = [userOne,userTwo,admin];
console.log(users);
admin.deleteUser(userTwo);
console.log(users);
