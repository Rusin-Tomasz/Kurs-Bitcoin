$(function () {
    console.log('test');

    var buyPriceContainer = $('#buy-price');
    var sellPriceContainer = $('#sell-price');

    var buyArrow = $('#buy-arrow');
    var sellArrow = $('#sell-arrow');

    /* Funkcja, ktora laczy sie z api i pobiera dane */


    function getExchangeData() {
        var currentBuyPrice = parseFloat(buyPriceContainer.text());
        var currentSellPrice = parseFloat(sellPriceContainer.text());

        console.log(currentBuyPrice);
        console.log(currentSellPrice);

        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            console.log(data);

            buyPriceContainer.html(data.PLN.buy);
            sellPriceContainer.html(data.PLN.sell);

            if (currentBuyPrice < data.PLN.buy) {
                buyArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
                console.log('Wzrost ceny');
            } else if (currentBuyPrice > data.PLN.buy) {
                buyArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
                console.log('Spadek ceny');
            } else {
                buyArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
                console.log('Bez zmian');
            };

            if (currentSellPrice < data.PLN.sell) {
                sellArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
                console.log('Wzrost ceny');
            } else if (currentSellPrice > data.PLN.sell) {
                sellArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
                console.log('Spadek ceny');
            } else {
                sellArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
                console.log('Bez zmian');
            };




            console.log(data.PLN.buy);
            console.log(data.PLN.sell);
            console.log('test czasu');

        });
    };

    getExchangeData()

    var interval = setInterval(getExchangeData, 5000);

    $('button').click(function () {
        console.log($(this).val());
        clearInterval(interval);
        interval = setInterval(getExchangeData, $(this).val());

        $('#refresh-frequency').html($(this).text());
    });




});
