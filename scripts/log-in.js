
const validLogIn = function(email, password, loginDB){

    for (var i = 0; i < loginDB.length; i++){

        document.cookie = 0;

        if ((email === loginDB[i].email) && (password === loginDB[i].password)){
            window.location.href = "../html/home.html";
            document.cookie = loginDB[i].userID;
            return loginDB[i].userID;
        }
    }
    document.getElementById("passWrong").innerHTML = "The login is incorrect";
    return 0;
}

function logIn(){
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passField").value;

    fetch("../db/logins.json")
        .then(response => response.json())
            .then(response => {console.log(validLogIn(email, password, response));});


}