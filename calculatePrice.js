var stringCurrentLeague = Array("", "Bronze", "Silver", "Gold", "Platinum","Diamond");
var stringGoalLeague = Array("", "Bronze", "Silver", "Gold", "Platinum", "Diamond");
var stringDivision = Array("", "V", "IV", "III", "II", "I");
var basePrices = Array("", 3, 10, 15, 20, 35);
var goalDivisionIndex;
var goalLeagueIndex;
var currentDivisionIndex;
var currentLeagueIndex;
function calculate() {
    //reajustar escala de precios
    getIndexes();
    if (currentLeagueIndex !== goalLeagueIndex) {
        price = calculateDifferentLeaguePrice();
    } else {
        price = calculateSameLeaguePrice();

    }
    price = price.toFixed(2);
    priceString = '<p id="totalPrice"><strong><FONT SIZE ="4">Total price: '+price+' €</FONT></strong></p>';
    totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = priceString;
    buttonPrice = document.getElementById("buttonTotalPrice");
    buttonPriceString = '<li id="buttonTotalPrice">'+
                        '<form name="_xclick" action="https://www.paypal.com/es/cgi-bin/webscr" method="post">\n'+
                        '<input type="hidden" name="cmd" value="_xclick">\n'+
                        '<input type="hidden" name="business" value="infohelloboost@gmail.com">\n'+
                        '<input type="hidden" name="currency_code" value="EUR">\n'+
                        '<input type="hidden" name="item_name" value="Eloboost">\n'+
                        '<input type="hidden" name="amount" value="'+price+'">\n'+
                        '<input type="image" src="http://www.paypal.com/es_ES/i/btn/x-click-but01.gif" border="0" name="submit" alt="Realice pagos con PayPal: es rápido, gratis y seguro">\n'+
                        '</form>\n'+
                        '</li>\n';
    buttonPrice.innerHTML = buttonPriceString;
}
function getCurrentDivisionIndex() {
    return stringDivision.indexOf(currentDivision);
}
function getCurrentLeagueIndex() {
    return stringCurrentLeague.indexOf(currentLeague);
}
function getGoalLeagueIndex() {
    return stringGoalLeague.indexOf(goalLeague);
}
function getGoalDivisionIndex() {
    return stringDivision.indexOf(goalDivision);
}
function calculateSameLeaguePrice() {
    calculatedPrice = 0;
    for (i = currentDivisionIndex; i < goalDivisionIndex; i++) {
        calculatedPrice = calculatedPrice + basePrices[currentLeagueIndex] * getPriceScales()[i];
    }
    return calculatedPrice;
}
function calculateDifferentLeaguePrice() {
    j = 0;
    difference = getDifference();
    calculatedPrice = 0;
    while (j <= difference) {
        if (j !== 0) {
            if (difference !== j) {
                for (i = 1; i < 5; i++) {
                    calculatedPrice = calculatedPrice + basePrices[currentLeagueIndex] * getPriceScales()[i];
                }
                currentLeagueIndex = currentLeagueIndex + 1;
                calculatedPrice = calculatedPrice + basePrices[currentLeagueIndex];
                j = j + 1;
            } else {
                for (i = 1; i < goalDivisionIndex; i++) {
                    calculatedPrice = calculatedPrice + basePrices[currentLeagueIndex] * getPriceScales()[i];
                }
                j = j + 1;
            }
        } else {
            for (i = currentDivisionIndex; i < 5; i++) {
                calculatedPrice = calculatedPrice + basePrices[currentLeagueIndex] * getPriceScales()[i];
            }
            j = j + 1;
            currentLeagueIndex = currentLeagueIndex + 1;
            calculatedPrice = calculatedPrice + basePrices[currentLeagueIndex];
        }
    }
    return calculatedPrice;
}
function getDifference() {
    return goalLeagueIndex - currentLeagueIndex;
}
function getIndexes() {
    currentLeagueIndex = getCurrentLeagueIndex();
    currentDivisionIndex = getCurrentDivisionIndex();
    goalLeagueIndex = getGoalLeagueIndex();
    goalDivisionIndex = getGoalDivisionIndex();

}
function getPriceScales() {
    switch (currentLeagueIndex) {
        case 1:
            return new Array("", 1.7, 2.25, 2.50, 2.70);
            break;
        case 2:
            return new Array("", 1.2, 1.15, 1, 1, 1.3);
            break;
        case 3:
            return new Array("", 1.25, 1.4, 1.25, 1.25, 1.3);
            break;
        case 4:
            return new Array("", 1.15, 1.1, 1.1, 1.25, 1);
            break;
        default:
            return new Array("", 1.2, 2, 2.5, 3, 1.2);
    }
}