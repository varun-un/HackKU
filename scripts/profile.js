

var curSettings = [];
curSettings = fetch("../db/userData.json")
    .then(response => response.json())
        .then(response => {
            var ans = [];
            for (var i = 0; i < response.length; i++){
                if (response[i].userID == document.cookie){
                    ans.push(response[i].recCalories);
                    ans.push(response[i].recVeg);
                    ans.push(response[i].recWater);
                    ans.push(response[i].recProtein);
                    ans.push(response[i].name);
                }
            }
            return ans;
        });

const secondfunc = async function(){
    curSettings = await curSettings;

    console.log(curSettings);
    console.log(document.cookie);

    document.getElementById("setCal").value = Number(curSettings[0]);
    document.getElementById("setWater").value = Number(curSettings[1]);
    document.getElementById("setVeg").value = Number(curSettings[2]);
    document.getElementById("setProtein").value = Number(curSettings[3]);
    document.getElementById("userName").innerHTML = "<u>" + curSettings[4] + "</u>";
}
secondfunc();


function clear(){
    console.log("hee")
    var cookies = document.cookie.split(";");

    console.log("out")
    window.location.href='./index.html';

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}