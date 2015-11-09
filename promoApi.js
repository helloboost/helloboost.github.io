var getLeague = "Bronze";
var getType = "Bo3";
var canPromo = true;
var promoPrice;
function getPromoLeague(promoLeague) {
    getLeague = promoLeague.options[promoLeague.selectedIndex].text;
    if (getLeague === "Diamond") {
        promoImage = document.getElementById("promoImg");
        promoImage.innerHTML = '<h1> Sorry, Diamond promotion is not available for the moment<h1/>'
        canPromo = false;
        calculatePromoPrice(canPromo);
    } else {
        processedImg = processLeagueImgString(getLeague);
        updateImages(processedImg);
        canPromo = true;
        calculatePromoPrice();
    }
}
function processLeagueImgString(getLeague) {
    processedImgLeague = "images/" + getLeague + "I" + ".png";
    return processedImgLeague;
}
function updateImages(promoImg) {
    promoImage = document.getElementById("promoImg");
    promoImage.innerHTML = '<li id="promoImg"><img src="' + promoImg + '" alt="" />';
}
function getPromoType(promoType) {
    getType = promoType.options[promoType.selectedIndex].text;
    calculatePromoPrice();
}
function calculatePromoPrice() {
    promprice = 0;
    if (canPromo) {
        if (getType === "Bo3") {
            promoPrice = basePrices[stringGoalLeague.indexOf(getLeague)] * 0.75;
        } else {
            promoPrice = basePrices[stringGoalLeague.indexOf(getLeague)];
        }
        promotionPrice = document.getElementById("promotionPrice");
        promoPriceString = '<FONT SIZE="3">Total price: ' + promoPrice + ' €<FONT/>'
        promotionPrice.innerHTML = promoPriceString;
        buttonControl();
    } else {
        promotionPrice = document.getElementById("promotionPrice");
        promotionPrice.innerHTML = '<FONT SIZE="3">Total price : 0 €<FONT/>';
        buttonControl();

    }
    function buttonControl() {
        payButton = document.getElementById("seriesPrice");
        payButtonString = '<input id="seriesPrice" type="hidden" name="amount" value="' + promoPrice + '">'
        payButton.innerHTML = payButtonString;
    }
}

