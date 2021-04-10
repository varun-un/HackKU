import {calcScore} from "./healthScore.js";

var leaderboard = document.getElementById("leaderboard");

var curUserID = document.cookie;
var groupIDs = [];

groupIDs = fetch("../db/groups.json")
    .then(response => response.json())
        .then(response => {
            for (var i = 0; i < response.length; i++){

                for (var w = 0; w < response[i].members.length; w++){
                    if (response[i].members[w] == (curUserID)){
                        return (response[i].members);
                    }
                }
            }
        });

async function secondfunc() {
    groupIDs = await groupIDs;
    var groupScores = fetch("../db/userData.json")
    .then(response => response.json())
        .then(response => {
            var groupScoresA = {};
            for (var i = 0; i < groupIDs.length; i++){
                var userObj = response.find(item => item.userID === groupIDs[i]);
                var userName = userObj.name;
                groupScoresA[userName] = calcScore(userObj["recCalories"], userObj["recWater"], userObj["recVeg"], userObj["recProtein"],
                     userObj["curCalories"], userObj["curWater"], userObj["curVeg"], userObj["curProtein"]);

                if (groupIDs[i] == curUserID){
                    var calPercent = (userObj.curCalories)/(userObj.recCalories);
                    var waterPercent = (userObj.curWater)/(userObj.recWater);
                    var vegPercent = (userObj.curVeg)/(userObj.recVeg);
                    var proteinPercent = (userObj.curProtein)/(userObj.recProtein);
                    var recCalories = userObj.recCalories;
                    var recWater = userObj.recWater;
                    var recVeg = userObj.recVeg;
                    var recProtein = userObj.recProtein;
                }
                var groupScoresB = [groupScoresA, calPercent, waterPercent, vegPercent, proteinPercent, recCalories, recWater, recVeg, 
                    recProtein];
            }
            return groupScoresB;
        });

    async function thirdfunc() {
        groupScores = await groupScores;

        //update progress bars
        document.getElementById("calbar").style.width = groupScores[1] * 100 + "%";
        document.getElementById("waterbar").style.width = groupScores[2] * 100 + "%";
        document.getElementById("vegbar").style.width = groupScores[3] * 100 + "%";
        document.getElementById("proteinbar").style.width = groupScores[4] * 100 + "%";

        document.getElementById("calbar").innerHTML = (groupScores[1] * groupScores[5]) + " / " + groupScores[5];
        document.getElementById("waterbar").innerHTML = (groupScores[2] * groupScores[6]) + " / " + groupScores[6];
        document.getElementById("vegbar").innerHTML = (groupScores[3] * groupScores[7]) + " / " + groupScores[7];
        document.getElementById("proteinbar").innerHTML = (groupScores[4] * groupScores[8]) + " / " + groupScores[8];


        groupScores = groupScores[0];

        var keysSorted = Object.keys(groupScores).sort(function(a,b){return groupScores[b]-groupScores[a]})
        console.log(keysSorted);
        var groupScoresSorted = {};
        for (var i = 0; i < keysSorted.length; i++){
            groupScoresSorted[keysSorted[i]] = groupScores[keysSorted[i]];
        }

        var i = 1;
        for (const key in groupScoresSorted){
            var para = document.createElement("h3");
            var node = document.createTextNode(i + ".   " + key + " - " + groupScoresSorted[key]);
            para.appendChild(node);
            i++;
            leaderboard.appendChild(para);
        }
    }
    thirdfunc();
}
secondfunc();
