// Book
function Book(_title, _author, _fieldOfStudy){
    this.title = _title;
    this.author = _author;
    this.fieldOfStudy = _fieldOfStudy;
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
Book.prototype.getFieldOfStudy = function(){
    return this.fieldOfStudy;
}
Book.prototype.setFieldOfStudy = function(_fieldOfStudy){
    this.fieldOfStudy = _fieldOfStudy;
}

//AudioBook
function AudioBook(_title, _author, _fieldOfStudy, _minutes){
    Book.call(this, _title, _author, _fieldOfStudy);
    this.minutes = _minutes
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
function TextBook(_title, _author, _fieldOfStudy, _pages){
    Book.call(this, _title, _author, _fieldOfStudy);
    this.pages = _pages
}

TextBook.prototype = Object.create(Book.prototype);
TextBook.prototype.constructor = TextBook;

TextBook.prototype.getPages = function(){
    return this.pages;
}
TextBook.prototype.setPages = function(_pages){
    this.pages = _pages;
}



