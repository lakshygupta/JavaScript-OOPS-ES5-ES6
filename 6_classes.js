class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`;
    }
    revise(newYear){
        this.year = newYear;
        this.revise = true;
    }
    //Static Methods : You have a method in your class that can be used without instantiate the objects of that class
    static topBookStore(){
        return 'Barnes & Noble';
    }
}

//Instantiate Object
const book1 = new Book('Book One','John Doe','2019');

book1.revise('2020');
console.log(book1);
console.log(book1.getSummary());

//console.log(book1.topBookStore()); //-> book1.topBookStore is not a function
console.log(Book.topBookStore());