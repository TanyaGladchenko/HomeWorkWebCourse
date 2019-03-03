window.onload = checkUsername;

function checkUsername( ){
    var username = prompt( 'Enter username' );

    if ( username.search(/\d/) == -1 ){
        alert(backwards(username));
    } else {
        alert(username.toUpperCase());
    }
}

function backwards( word ){
    var backwardsWord = '';
    for(var i = word.length-1; i >= 0; i--){
        backwardsWord += word.charAt(i);
    }
    return backwardsWord;
}