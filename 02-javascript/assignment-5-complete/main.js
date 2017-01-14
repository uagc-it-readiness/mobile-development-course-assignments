function calculate() {
    var amount = document.getElementById('amount').value;
    var rate = document.getElementById('rate').value;
    var years = parseFloat(document.getElementById('years').value);

    var resultsTable = document.getElementById('earnings_report');
    var innerHTML;
    var currentAmount = parseFloat(amount);
    rate = parseFloat(rate);

    innerHTML = "<table>";
    innerHTML += "<tr><th>Month</th><th>Interest</th><th>Balance</th></tr>"

    for (var i = 1; i <= years * 12; i++) {
        var month = i;
        var interest = currentAmount * ((rate / 100)/12);
        var balance = Math.round((currentAmount + interest)*100) / 100;
        currentAmount = balance;

        innerHTML += "<tr><td>" + i + "</td><td>" + interest.toFixed(2) + "</td><td>" + balance.toFixed(2) + "</td></tr>";
    }

    innerHTML += "</table>";

    resultsTable.innerHTML += innerHTML;
}

function reset() {
    var resultsTable = document.getElementById('earnings_report');
    resultsTable.innerHTML = "";
}