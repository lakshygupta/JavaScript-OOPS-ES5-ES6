//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//getAge -> prints the diff bw today year and year of printing 
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
}

//Revise / change the year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true; 

}

//Instatiate the object 
const book1 = new Book('Book One','John Doe','2013');
const book2 = new Book('Book Two','Jane Doe','2016');

// console.log(book1.title);
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getAge());

console.log(book2);
console.log(book2.getAge());
book2.revise('2019');
console.log(book2);
console.log(book2.getAge());