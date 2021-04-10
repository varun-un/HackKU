const validLogIn = function(email, password, loginDB){

    for (var i = 0; i < loginDB.length; i++){

        if ((email === loginDB[i].email) && (password === loginDB[i].password)){
            window.location.href = "../html/home.html";
            return loginDB[i].userID;
        }
    }
    return 0;
}

function logIn(){
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passField").value;
    var loginDB;

    fetch("../db/logins.json")
        .then(response => response.json())
            .then(response => {console.log(validLogIn(email, password, response));});


}