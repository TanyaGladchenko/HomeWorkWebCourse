function Book(){
    var title = '123';

    Book.prototype.getTitle = function (){
        return title;
    }
    Book.prototype.setTitle = function (newTitle){
        title = newTitle;
    }
}

window.onload = (function (){
    var book = new Book();
    var audioBook = Object.create(book);
    var t = audioBook.getTitle();
    alert(t);
})


