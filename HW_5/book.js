// Book
function Book(_id, _title, _author){
    this.id = _id;    
    this.title = _title;
    this.author = _author;
}
Book.prototype.getId = function (){
    return this.id;
}
Book.prototype.setId = function (_id){
    this.id = _id;
}
Book.prototype.getTitle = function (){
    return this.title;
}
Book.prototype.setTitle = function (_title){
    this.title = _title;
}
Book.prototype.getAuthor = function(){
    return this.author;
}
Book.prototype.setAuthor = function(_author){
    this.author = _author;
}

//AudioBook
function AudioBook(_id, _title, _author, _minutes){
    Book.call(this, _id, _title, _author);
    this.minutes = _minutes;
}

AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;

AudioBook.prototype.getMinutes = function(){
    return this.minutes;
}
AudioBook.prototype.setMinutes = function(_minutes){
    this.minutes = _minutes;
}

//TextBook
function TextBook(_id, _title, _author, _pages){
    Book.call(this, _id, _title, _author);
    this.pages = _pages;
}

TextBook.prototype = Object.create(Book.prototype);
TextBook.prototype.constructor = TextBook;

TextBook.prototype.getPages = function(){
    return this.pages;
}
TextBook.prototype.setPages = function(_pages){
    this.pages = _pages;
}

window.onload = function(){
    var bookShop = new Map();
    bookShop.set('1', new AudioBook("Gulliver's Travels","Jonathan Swift", 124));
    bookShop.set('2', new TextBook("The Adventures of Sherlock Holmes","Arthur Conan Doyle", 548));
    var array = [];
    for (var entry of bookShop.values()) {
        array.push(entry);
    }
    alert(JSON.stringify(array));
}

