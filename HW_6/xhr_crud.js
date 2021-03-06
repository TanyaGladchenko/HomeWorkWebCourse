xhrCrudJson = function(){ 
    var formDataToJson = function(){
        var textBook = new TextBook(
            document.getElementById("book_id").value,
            document.getElementById("title").value,
            document.getElementById("author").value,
            document.getElementById("pages").value,
        );
        return JSON.stringify(textBook);
    }
    var changeTable = function(bookList){
        var tableBookHtml = document.getElementById("list_book");
        for (let i = 0; i < bookList.length; i++) {
            var row = tableBookHtml.insertRow(i + 1);
            // fill id
            var cellId = row.insertCell(0);
            cellId.innerHTML = bookList[i].id;
            // fill title
            var cellTitle = row.insertCell(1);
            cellTitle.innerHTML = bookList[i].title;
            // fill author
            var cellAuthor = row.insertCell(2);
            cellAuthor.innerHTML = bookList[i].author;
            // fill pages
            var cellPages = row.insertCell(3);
            cellPages.innerHTML = bookList[i].pages;
        }
    }
    var readBooks = function(){
        xmlRequest = new XMLHttpRequest();
        xmlRequest.withCredentials = true;
        xmlRequest.addEventListener("readystatechange", function (){
            if (this.readyState === 4){
                var result = JSON.parse(this.response);
                changeTable(result);
            }
        });
        xmlRequest.open("GET", "http://195.50.2.67:2403/tg-books");
        xmlRequest.setRequestHeader("Content-Type", "application/json");
        xmlRequest.send();
    }
    return {
        
        createBookEvent : function(e){

            e.preventDefault();
            var jsonBook = formDataToJson();
            console.log(jsonBook);
            xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    readBooks();
                }
            });
            xhr.open("POST", "http://195.50.2.67:2403/tg-books/");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(jsonBook);          
        },
        updateBookEvent : function(e){
            e.preventDefault();
            var jsonBook = formDataToJson(document);
            console.log(jsonBook);
            xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    readBooks();
                } 
            });
            xhr.open("PUT", "http://195.50.2.67:2403/tg-books/" + document.getElementById("book_id").value);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(jsonBook);
        },
        deleteBookEvent : function(e){
            e.preventDefault();
            var jsonBook = formDataToJson(document);
            console.log(jsonBook);
            xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    readBooks();
                } 
            });
            xhr.open("DELETE", "http://195.50.2.67:2403/tg-books/" + document.getElementById("book_id").value);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send();
        },
        clearFormBook : function() {
            document.getElementById("book_id").innerHTML = '';
            document.getElementById("title").innerHTML = '';
            document.getElementById("author").innerHTML = '';
            document.getElementById("pages").innerHTML = '';
        }
    }
};
(function () {
    document.getElementById('crtButton').addEventListener('click', xhrCrudJson().createBookEvent, false);
    document.getElementById('updButton').addEventListener('click', xhrCrudJson().updateBookEvent, false);
    document.getElementById('delButton').addEventListener('click', xhrCrudJson().deleteBookEvent, false);
    document.getElementById('clearButton').addEventListener('click', xhrCrudJson().clearFormBook, false);
})()

