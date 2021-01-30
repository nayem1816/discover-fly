function clickBtn(ticket, isIncrease) {
    var ticketInput = document.getElementById(ticket + '-input').value;
    var ticketInputNum = parseInt(ticketInput);
    var ticketIncrease = ticketInputNum;
    if (isIncrease == true) {
        ticketIncrease = ticketInputNum + 1;
    }
    if (isIncrease == false && ticketInputNum > 0) {
        ticketIncrease = ticketInputNum - 1;
    }
    document.getElementById(ticket + '-input').value = ticketIncrease;
    var ticketPrice = 0;
    if (ticket == 'first-class') {
        ticketPrice = ticketInputNum * 150;
    }
    if (ticket == 'economy') {
        ticketPrice = ticketInputNum * 100;
    }
    ticketTotalPrice();
}

function ticketTotalPrice() {
    var firstClassInput = ticketInput('first-class');
    var economyInput = ticketInput('economy');

    var subTotal = firstClassInput * 150 + economyInput * 100;
    document.getElementById('sub-total').innerText = subTotal;

    var currentVat = subTotal * .1;
    document.getElementById('current-vat').innerText = currentVat;

    var grandTotalPrice = subTotal + currentVat;
    document.getElementById('grand-total-price').innerText = grandTotalPrice;
}

function ticketInput(product) {
    var productInput = document.getElementById(product + '-input').value;
    var productInputNum = parseInt(productInput);
    return productInputNum;
}




//after submit part.......
var completeBuyTicket = document.getElementById('complete-buy-ticket');
completeBuyTicket.addEventListener('click', function () {
    if (ticketInput('first-class') > 0 || ticketInput('economy') > 0) {
        document.getElementById('before-buy-ticket').style.display = 'none';
        document.getElementById('after-buy-ticket').style.display = 'block';
        document.getElementById('after-buy-first-class').innerText = ticketInput('first-class');
        document.getElementById('after-buy-economy').innerText = ticketInput('economy');
    }
    else {
        alert('Please buy at-least 1 ticket. Thank You');
    }
})
var againBuyTicket = document.getElementById('again-buy-ticket');
againBuyTicket.addEventListener('click', function () {
    document.getElementById('after-buy-ticket').style.display = 'none';
    document.getElementById('before-buy-ticket').style.display = 'block';
    document.getElementById('first-class-input').value = 0;
    document.getElementById('economy-input').value = 0;
    document.getElementById('sub-total').innerText = 0;
    document.getElementById('current-vat').innerText = 0;
    document.getElementById('grand-total-price').innerText = 0;
})








