// Book
function Book(_id, _title, _author){
    this.id = _id;
    this.title = _title;
    this.getId = function (){
        return this.id;
    }
    this.setId = function (_id){
        this.id = _id;
    }
    this.getTitle = function (){
        return this.title;
    }
    this.setTitle = function (_title){
        this.title = _title;
    }
    this.getAuthor = function(){
        return this.author;
    }
    this.setAuthor = function(_author){
        this.author = _author;
    }
}

//AudioBook
function AudioBook(_id, _title, _author, _minutes){
    Book.call(this, _id, _title, _author);
    this.minutes = _minutes;

    this.getMinutes = function(){
        return this.minutes;
    }
    this.setMinutes = function(_minutes){
        this.minutes = _minutes;
    }
}
//TextBook
function TextBook(_id, _title, _author, _pages){
    Book.call(this, _id, _title, _author);
    this.pages = _pages;

    this.getPages = function(){
        return this.pages;
    }

    this.setPages = function(_pages){
        this.pages = _pages;
    }
}

