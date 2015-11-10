var currentLeague = "Bronze";
var currentDivision = "V";
var goalLeague = "Bronze";
var goalDivision = "IV";
var currentImage = "BronzeV";
var goalImage = "BronzeIV";
function getCurrentLeague(leagueSelect) {
    currentLeague = leagueSelect.options[leagueSelect.selectedIndex].text;
    updateCurrentSelect();
    changeCurrentImage();
}
function getCurrentDivision(divisionSelect) {
    currentDivision = divisionSelect.options[divisionSelect.selectedIndex].text;
    changeCurrentImage();
}
function getGoalLeague(leagueSelect) {
    goalLeague = leagueSelect.options[leagueSelect.selectedIndex].text;
    updateGoalDivisionSelect();
    changeGoalImage();
}
function getGoalDivision(divisionSelect) {
    goalDivision = divisionSelect.options[divisionSelect.selectedIndex].text;
    changeGoalImage();
}
function changeCurrentImage() {
    currentImage = "images/" + currentLeague + currentDivision + ".png";
    image = document.getElementById("currentLeagueImage");
    image.innerHTML = '<li id="' + currentLeagueImage + '"><img src="' + currentImage + '" alt="" />';
    updateAllSelects();
    calculate();
}
function changeGoalImage() {
    checkOffer();
    goalImage = "images/" + goalLeague + goalDivision + ".png";
    image = document.getElementById("goalLeagueImage");
    image.innerHTML = '<li id="' + goalLeagueImage + '"><img src="' + goalImage + '" alt="" />';
    calculate();
}
function changeGoalImage_ (updatedLeague, updatedDivision) {
    checkOffer();
    goalImage = "images/" + updatedLeague + updatedDivision + ".png";
    image = document.getElementById("goalLeagueImage");
    image.innerHTML = '<li id="' + goalLeagueImage + '"><img src="' + goalImage + '" alt="" />';
    calculate();
}
function checkOffer(){
    if (goalLeague === "Gold" && goalDivision === "V") {
        offerDisplay = document.getElementById("boostoffer");
        offerDisplay.innerHTML = '<p><input id="eloboostCheckbox" type="checkbox" name="eloboostOffer" value="EloBoostOffer" onchange="calculate()">Get another boost to Gold V with 50% discount!</p>';
    }else{
        offerDisplay = document.getElementById("boostoffer");
        offerDisplay.innerHTML = '<p id="boostoffer"></p>';
    }
}
