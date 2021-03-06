const s1 = 'hello';
console.log(typeof s1); //-> string
//JS wraps the primitive type string in object and all the object methods can be called for the primitive type string
const s2 = new String('hello');
console.log(typeof s2); //-> object

// alert(1);
// console.log(navigator.appVersion);

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    } 
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    } 
};

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book2));
