var duoLeague = "Bronze";
var amountGames = 1;
var canDuo = true;
var duoPrice = 3;
var stringDuoImg;
function getDuoqLeague(leagueSelect) {
    duoLeague = leagueSelect.options[leagueSelect.selectedIndex].text;
    if (duoLeague === "Diamond") {
        duoImage = document.getElementById("duoImg");
        duoImage.innerHTML = '<h1> Sorry, Diamond duoQ is not available for the moment<h1/>';
        canDuo = false;
        displayDuoQPrice();
    } else {
        canDuo = true;
        updateDuoImg();
        execute();
        updatePayButton();
    }
}
function getAmountGames() {
    amountGames = document.getElementById("idAmountGames").value;
}
function execute() {
    getAmountGames();
    calculateDuoPrice();
    displayDuoQPrice();
    updatePayButton();
}
function calculateDuoPrice() {
    duoPrice = basePrices[stringGoalLeague.indexOf(duoLeague)] * amountGames;
}
function displayDuoQPrice() {
    duoTextPrice = document.getElementById("duoTotalPrice");
    if (canDuo) {
        stringDuoPrice = '<p id="duoTotalPrice"><strong><FONT SIZE ="4">Total price:' + duoPrice + '€</FONT></strong></p>';
        duoTextPrice.innerHTML = stringDuoPrice;
    }else{
        stringDuoPrice = '<p id="duoTotalPrice"><strong><FONT SIZE ="4"></FONT></strong></p>';
        duoTextPrice.innerHTML = stringDuoPrice;
    }
}
function updateDuoImg() {
    duoImage = document.getElementById("duoImg");
    processDuoImg();
    duoImage.innerHTML = '<li id="duoImg"><img src="' + stringDuoImg + '" alt="" />';
}
function processDuoImg() {
    stringDuoImg = "images/" + duoLeague + "I" + ".png";
}
function updatePayButton(){
    duoButtonType = document.getElementById("buttonDuoType");
    duoButtonPrice = document.getElementById("buttonDuoPrice");
    buttonDuoTypeString = '<input id="buttonDuoType" type="hidden" name="item_name" value="'+amountGames+" "+duoLeague +' DuoQ">'
    buttonDuoPriceString='<input id="buttonDuoPrice"type="hidden" name="amount" value="'+duoPrice+'">';
    duoButtonType.innerHTML = buttonDuoTypeString;
    duoButtonPrice.innerHTML = buttonDuoPriceString;
}