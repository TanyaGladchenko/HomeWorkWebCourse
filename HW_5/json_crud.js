jsonCRUD = {
    bookShop : new Map(),
    toArray : function(values){
        var array = [];
        for (var entry of values) {
            array.push(entry);
        }
        return array;
    },
    jsonToBookType : function (booksJson){
        var book = JSON.parse(booksJson);
        if (book.minutes != undefined ){
            return new AudioBook(book.id, book.title, book.author, book.minutes);
        };
        if (book.pages != undefined) {
            return new TextBook(book.id, book.title, book.author, book.pages);
        }
    },
    bookTypeToJson : function (bookType){
        if (bookType instanceof AudioBook){

        }
    },
    createBook : function(booksJson){
        var crtBook = this.jsonToBookType(booksJson);
        if (!this.bookShop.has(crtBook.getId())){
            this.bookShop.set(crtBook.getId(), crtBook)
            return true;        
        }
        return false;
    },
    updateBook : function(booksJson){
        var updBook = this.jsonToBookType(booksJson);
        if (this.bookShop.has(updBook.getId())){
            this.bookShop.set(updBook.getId(), updBook);
            return true;
        }
        return false;
    },
    deleteBook : function(bookIdJson){
        var delbookId = JSON.parse(bookIdJson);
        if (this.bookShop.has(delbookId.id)){
            this.bookShop.delete(delbookId.id);
            return true;
        } 
        return false;
    },
    readBook : function (bookIdJson){
        var bookId = JSON.parse(bookIdJson);
        return JSON.stringify(this.bookShop.get(bookId.id));
    },
    getBookShop : function(){
        return JSON.stringify(this.toArray(this.bookShop.values()));
    }
}

// var bookShop = new Map();
// bookShop.set( new AudioBook(1,"Gulliver's Travels","Jonathan Swift", 124));
// bookShop.set( new TextBook(2,"The Adventures of Sherlock Holmes","Arthur Conan Doyle", 548));
// bookShop.set( new AudioBook(3, "Pride and Prejudice","Jane Austen", 3258));
// bookShop.set( new TextBook(4, "20,000 Leagues Under the Sea","Jules Verne", 378));
// bookShop.set( new AudioBook(5, "The Count of Monte Cristo","Alexandre Dumas", 58640));
// bookShop.set( new TextBook(6, "The War of the Worlds","H. G. Wells", 358));
// bookShop.set( new AudioBook(7, "Peter Pan","J. M. Barrie", 652));
// bookShop.set( new TextBook(8, "The Sea Wolf","Jack London", 458));
// bookShop.set( new AudioBook(9, "Alice in Wonderland","Lewis Carroll", 224));
// bookShop.set( new TextBook(10, "Oliver Twist","Charles Dickens", 280));
// alert(JSON.stringify(bookShop));

// SmokTest
window.onload = function (){
    var json = '';
    //check create
    json = '{"id":1, "title":"The Adventures of Sherlock Holmes", "author":"Jonathan Swift", "minutes":124}';
    jsonCRUD.createBook(json);
    json = '{"id":2, "title":"Gulliver\'s Travels", "author":"Arthur Conan Doyle", "pages":548}';
    jsonCRUD.createBook(json);
    json = '{"id":3, "title":"Pride and Prejudice", "author":"Jane Austen", "minutes":3258}';
    jsonCRUD.createBook(json);
    json = '{"id":4, "title":"20,000 Leagues Under the Sea", "author":"Jules Verne", "pages":378}';
    jsonCRUD.createBook(json);
    alert(jsonCRUD.getBookShop());
    //check update
    json = '{"id":1, "title":"Gulliver\'s Travels", "author":"Jonathan Swift", "minutes":124}';
    jsonCRUD.updateBook(json);
    json = '{"id":2, "title":"The Adventures of Sherlock Holmes", "author":"Arthur Conan Doyle", "pages":548}';
    jsonCRUD.updateBook(json);
    alert(jsonCRUD.getBookShop());
    //check delete
    json = '{"id":1}';
    jsonCRUD.deleteBook(json);
    alert(jsonCRUD.getBookShop());
    //check read
    json = '{"id":4}';
    alert(jsonCRUD.readBook(json));
}
