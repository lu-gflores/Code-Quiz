//ids from highscore.html
var backBtnEl = document.getElementById("backBtn");
var clearBtnEl = document.getElementById("clearBtn");
//id element for score
var scoreListEl = document.getElementById("scoreList");
//get scoreStore from index.js
var scoreStore = localStorage.getItem("scoreStore");
scoreStore = JSON.parse(scoreStore);
//if scoreStore is NOT empty, display scores
if (scoreStore !== null) {
    for (var i =  0; i < scoreStore.length; i++) {
        var li = document.createElement("li");
        li.textContent = scoreStore[i].name + " " + scoreStore[i].score;
        scoreListEl.appendChild(li);
    }
}
//back and clear event
clearBtnEl.addEventListener("click", function() {
    localStorage.clear();
});
backBtnEl.addEventListener("click", function() {
    history.back();
    window.location.href = 'index.html';
} );