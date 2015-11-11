var stringCurrentLeague = Array("", "Bronze", "Silver", "Gold", "Platinum", "Diamond");
var stringGoalLeague = Array("", "Bronze", "Silver", "Gold", "Platinum", "Diamond");
var stringDivision = Array("", "V", "IV", "III", "II", "I");
var basePrices = Array("", 3, 10, 15, 20, 35);
var goalDivisionIndex;
var goalLeagueIndex;
var currentDivisionIndex;
var currentLeagueIndex;
var currentOfferLeague = "Bronze";
var currentOfferDivision = "V";
var currentOfferLeagueIndex;
var currentOfferDivisionIndex;
var price = 0;
var checked = false;
function calculate() {
    getIndexes();
    if (currentLeagueIndex !== goalLeagueIndex) {
        price = calculateDifferentLeaguePrice(currentLeagueIndex, currentDivisionIndex, goalLeagueIndex, goalDivisionIndex);
    } else {
        price = calculateSameLeaguePrice(currentDivisionIndex, currentLeagueIndex, goalDivisionIndex);

    }
    offerPriceDisplay = document.getElementById("eloboostCheckbox");
    if (offerPriceDisplay !== null) {
        if (offerPriceDisplay.checked) {
            showOfferSelects();
            checkedPrice = parseFloat(143.93);
            priceString = '<p id="totalPrice"><strong><FONT SIZE ="4">Total price: ' + checkedPrice + ' €</FONT></strong></p>';
            offerTotalPrice = document.getElementById("totalPrice");
            offerTotalPrice.innerHTML = priceString;
            totalPrice = document.getElementById("totalPrice");
            totalPrice.innerHTML = priceString;
            buttonPrice = document.getElementById("buttonTotalPrice");
            buttonPriceString = '<li id="buttonTotalPrice">' +
                    '<form name="_xclick" action="https://www.paypal.com/es/cgi-bin/webscr" method="post">\n' +
                    '<input type="hidden" name="cmd" value="_xclick">\n' +
                    '<input type="hidden" name="business" value="infohelloboost@gmail.com">\n' +
                    '<input type="hidden" name="currency_code" value="EUR">\n' +
                    '<input type="hidden" name="item_name" value="' + "Eloboost: " + currentLeague + " " + currentDivision + " " + "to" + " " + goalLeague + " " + goalDivision +" Friendly gold included"+ '">\n' +
                    '<input type="hidden" name="amount" value="' + checkedPrice + '">\n' +
                    '<input type="image" src="http://www.paypal.com/es_ES/i/btn/x-click-but01.gif" border="0" name="submit" alt="Realice pagos con PayPal: es rápido, gratis y seguro">\n' +
                    '</form>\n' +
                    '</li>\n';
            buttonPrice.innerHTML = buttonPriceString;
            checked = true;
        } else {
            checked = false;
            hideOffer();
        }
    }


    if (checked === false) {
        price = price.toFixed(2);
        priceString = '<p id="totalPrice"><strong><FONT SIZE ="4">Total price: ' + price + ' €</FONT></strong></p>';
        totalPrice = document.getElementById("totalPrice");
        totalPrice.innerHTML = priceString;
        buttonPrice = document.getElementById("buttonTotalPrice");
        buttonPriceString = '<li id="buttonTotalPrice">' +
                '<form name="_xclick" action="https://www.paypal.com/es/cgi-bin/webscr" method="post">\n' +
                '<input type="hidden" name="cmd" value="_xclick">\n' +
                '<input type="hidden" name="business" value="infohelloboost@gmail.com">\n' +
                '<input type="hidden" name="currency_code" value="EUR">\n' +
                '<input type="hidden" name="item_name" value="' + "Eloboost: " + currentLeague + " " + currentDivision + " " + "to" + " " + goalLeague + " " + goalDivision + '">\n' +
                '<input type="hidden" name="amount" value="' + price + '">\n' +
                '<input type="image" src="http://www.paypal.com/es_ES/i/btn/x-click-but01.gif" border="0" name="submit" alt="Realice pagos con PayPal: es rápido, gratis y seguro">\n' +
                '</form>\n' +
                '</li>\n';
        buttonPrice.innerHTML = buttonPriceString;
    }
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
function calculateSameLeaguePrice(cdivIndex, cleagueIndex, gdivIndex) {
    calculatedPrice = 0;
    for (i = cdivIndex; i < gdivIndex; i++) {
        calculatedPrice = calculatedPrice + basePrices[cleagueIndex] * getPriceScales(cleagueIndex)[i];
    }
    return calculatedPrice;
}
function calculateDifferentLeaguePrice(cleagueIndex, cdivIndex, gleagueIndex, gdivIndex) {
    j = 0;
    difference = getDifference(gleagueIndex, cleagueIndex);
    calculatedPrice = 0;
    while (j <= difference) {
        if (j !== 0) {
            if (difference !== j) {
                for (i = 1; i < 5; i++) {
                    calculatedPrice = calculatedPrice + basePrices[cleagueIndex] * getPriceScales(cleagueIndex)[i];
                }
                cleagueIndex = cleagueIndex + 1;
                calculatedPrice = calculatedPrice + basePrices[cleagueIndex];
                j = j + 1;
            } else {
                for (i = 1; i < gdivIndex; i++) {
                    calculatedPrice = calculatedPrice + basePrices[cleagueIndex] * getPriceScales(cleagueIndex)[i];
                }
                j = j + 1;
            }
        } else {
            for (i = cdivIndex; i < 5; i++) {
                calculatedPrice = calculatedPrice + basePrices[cleagueIndex] * getPriceScales(cleagueIndex)[i];
            }
            j = j + 1;
            cleagueIndex = cleagueIndex + 1;
            calculatedPrice = calculatedPrice + basePrices[cleagueIndex];
        }
    }
    return calculatedPrice;
}
function getDifference(gleagueIndex, cleagueIndex) {
    return gleagueIndex - cleagueIndex;
}
function getIndexes() {
    currentLeagueIndex = getCurrentLeagueIndex();
    currentDivisionIndex = getCurrentDivisionIndex();
    goalLeagueIndex = getGoalLeagueIndex();
    goalDivisionIndex = getGoalDivisionIndex();

}
function getPriceScales(cleagueIndex) {
    switch (cleagueIndex) {
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
function calculateOfferPrice(initPrice) {
    getOfferIndexes();
    initPrice = parseFloat(initPrice);
    offerPrice = calculateDifferentLeaguePrice(currentOfferLeagueIndex, currentOfferDivisionIndex, goalLeagueIndex, goalDivisionIndex) * 0.5;
    offerPrice = parseFloat(offerPrice);
    initPrice = initPrice + offerPrice;
    initPrice = initPrice.toFixed(2);
    priceString = '<p id="totalPrice"><strong><FONT SIZE ="4">Total price: ' + initPrice + ' €</FONT></strong></p>';
    totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = priceString;
    buttonPrice = document.getElementById("buttonTotalPrice");
    buttonPriceString = '<li id="buttonTotalPrice">' +
            '<form name="_xclick" action="https://www.paypal.com/es/cgi-bin/webscr" method="post">\n' +
            '<input type="hidden" name="cmd" value="_xclick">\n' +
            '<input type="hidden" name="business" value="infohelloboost@gmail.com">\n' +
            '<input type="hidden" name="currency_code" value="EUR">\n' +
            '<input type="hidden" name="item_name" value="' + "Eloboost: " + currentLeague + " " + currentDivision + " " + "to" + " " + goalLeague + " " + goalDivision + " Friendly gold included" + '">\n' +
            '<input type="hidden" name="amount" value="' + initPrice + '">\n' +
            '<input type="image" src="http://www.paypal.com/es_ES/i/btn/x-click-but01.gif" border="0" name="submit" alt="Realice pagos con PayPal: es rápido, gratis y seguro">\n' +
            '</form>\n' +
            '</li>\n';
    buttonPrice.innerHTML = buttonPriceString;
}
function showOfferSelects() {
    offerLeagueDisplay = document.getElementById("offerLeagueSelect");
    offerDivisionDisplay = document.getElementById("offerDivisionSelect");
    offerLeagueSelectString = '<li id="offerLeagueSelect">' +
            '<FONT SIZE=4>Current league</FONT>' +
            '<select onchange="getCurrentOfferLeague(this)">' +
            '<option value="currentOfferLeagueBronze">Bronze</option>' +
            '<option value="currentOfferLeagueSilver">Silver</option>' +
            '</select>' +
            '</li>';
    offerDivsionSelectString = '<li id="offerDivisionSelect">' +
            '<FONT SIZE=4>Current division</FONT>' +
            '<select onchange="getCurrentOfferDivision(this)">' +
            '<option value="currentOfferDivisionV" selected>V</option>' +
            '<option value="currentOfferDivisionIV">IV</option>' +
            '<option value="currentOfferDivisionIII">III</option>' +
            '<option value="currentOfferDivisionII">II</option>' +
            '<option value="currentOfferDivisionI">I</option>' +
            '</select>' +
            '</li>';
    offerLeagueDisplay.innerHTML = offerLeagueSelectString;
    offerDivisionDisplay.innerHTML = offerDivsionSelectString;
}
function getOfferIndexes() {
    currentOfferDivisionIndex = stringDivision.indexOf(currentOfferDivision);
    currentOfferLeagueIndex = stringCurrentLeague.indexOf(currentOfferLeague);
}
function getCurrentOfferLeague(leagueSelect) {
    currentOfferLeague = leagueSelect.options[leagueSelect.selectedIndex].text;
    calculateOfferPrice(price);
}
function getCurrentOfferDivision(divisionSelect) {
    currentOfferDivision = divisionSelect.options[divisionSelect.selectedIndex].text;
    calculateOfferPrice(price);

}
function hideOffer() {
    offerLeagueDisplay = document.getElementById("offerLeagueSelect");
    offerDivisionDisplay = document.getElementById("offerDivisionSelect");
    offerLeagueSelectString = '<li id="offerLeagueSelect">' +
            '</li>';
    offerDivsionSelectString = '<li id="offerDivisionSelect">' +
            '</li>';
    offerLeagueDisplay.innerHTML = offerLeagueSelectString;
    offerDivisionDisplay.innerHTML = offerDivsionSelectString;
}