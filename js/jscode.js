var countPop = 0;
var countEgg = 0;
var countBeer = 0;
var countSoap = 0;

function AddToCart(item) {

    var ItemPrices = [3.25, 2.5, 11, 5.75];

    var displayPop = document.getElementById("displayCountPop");
    var displayEgg = document.getElementById("displayCountEgg");
    var displayBeer = document.getElementById("displayCountBeer");
    var displaySoap = document.getElementById("displayCountSoap");

    displayPop.innerHTML = countPop;
    displayEgg.innerHTML = countEgg;
    displayBeer.innerHTML = countBeer;
    displaySoap.innerHTML = countSoap;

    var displayPopTotal = document.getElementById("Pop");
    displayPopTotal.innerHTML = parseInt(countPop) * ItemPrices[0];

    var displayEggTotal = document.getElementById("Egg");
    displayEggTotal.innerHTML = parseInt(countEgg) * ItemPrices[1]

    var displayBeerTotal = document.getElementById("Beer");
    displayBeerTotal.innerHTML = parseInt(countBeer) * ItemPrices[2]

    var displaySoapTotal = document.getElementById("Soap");
    displaySoapTotal.innerHTML = parseInt(countSoap) * ItemPrices[3]

    var displayTotal = document.getElementById("Total");
    displayTotal.innerHTML = (parseInt(countPop) * ItemPrices[0]) + (parseInt(countEgg) * ItemPrices[1]) + (parseInt(countBeer) * ItemPrices[2]) + (parseInt(countSoap) * ItemPrices[3])
}