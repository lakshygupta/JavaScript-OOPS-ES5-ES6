//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year} and ${this.month}`;
}

//Magazine Constructor that inherits the Book
// function Magazine(title,author,year,month){
//     Book.call(this,title,author,year);
//     this.month = month; //specify the month seprately
// }
//above can also be done with :-
function Magazine(...args){
    Book.apply(this,args);
    this.month = args[3];
}

//Prototype of Book is not inherited by default so to inherit it :
Magazine.prototype = Object.create(Book.prototype);

//Instantiate the Magazine Object
const mag1 = new Magazine('Book One', 'John Doe','2020', 'Jan');

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
// console.log(mag1.getSummary());