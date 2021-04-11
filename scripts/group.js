import {calcScore} from "./healthScore.js";

var leaderboard = document.getElementById("groupPage");

var curUserID = document.cookie;
var groupIDs = [];

groupIDs = fetch("../db/groups.json")
    .then(response => response.json())
        .then(response => {
            for (var i = 0; i < response.length; i++){

                for (var w = 0; w < response[i].members.length; w++){
                    if (response[i].members[w] == (curUserID)){
                        return [(response[i].members), response[i].name];
                    }
                }
            }
        });

async function secondfunc() {
    groupIDs = await groupIDs;

    //set group name
    document.getElementById("groupName").innerHTML = "Group: " + groupIDs[1];

    groupIDs = groupIDs[0];

    var groupScores = fetch("../db/userData.json")
    .then(response => response.json())
        .then(response => {
            var groupScoresA = {};
            for (var i = 0; i < groupIDs.length; i++){
                var userObj = response.find(item => item.userID === groupIDs[i]);
                var userName = userObj.name;
                groupScoresA[userName] = calcScore(userObj["recCalories"], userObj["recWater"], userObj["recVeg"], userObj["recProtein"],
                     userObj["curCalories"], userObj["curWater"], userObj["curVeg"], userObj["curProtein"]);

            }
            return groupScoresA;
        });

    async function thirdfunc() {
        groupScores = await groupScores;

        var keysSorted = Object.keys(groupScores).sort(function(a,b){return groupScores[b]-groupScores[a]})
        console.log(keysSorted);
        var groupScoresSorted = {};
        for (var i = 0; i < keysSorted.length; i++){
            groupScoresSorted[keysSorted[i]] = groupScores[keysSorted[i]];
        }

        var i = 1;
        for (const key in groupScoresSorted){
            var para = document.createElement("h3");
            para.innerHTML = `<span style="float:left">` + i + ".   " + key + "</span>" + `<span style="float:right;">` 
                + groupScoresSorted[key] + "</span><br>";
            i++;
            leaderboard.appendChild(para);
        }
    }
    thirdfunc();
}
secondfunc();
