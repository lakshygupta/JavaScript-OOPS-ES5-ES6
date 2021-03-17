var userOne = {
    email : 'lakshygupta99@gmail.com',
    name : 'Lakshy Gupta',
    login(){
        console.log(`${this.email} has logged in ..`)
    },
    logout(){
        console.log(`${this.email} has logout ..`)
    }
}

console.log(userOne);

//updating the properties
console.log(userOne.email);
console.log(userOne['email']);
userOne['name'] = 'Mario';
console.log(userOne.name);

const prop = 'name';
console.log(userOne[prop]);
console.log(userOne.prop); //-> undefined

userOne.age = 25;
console.log(userOne);
userOne.loginfo = function(){
    return `${this.name} is logged in as ${this.email} with ${this.age}`
}
console.log(userOne.loginfo());
console.log(userOne);