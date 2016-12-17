function calcInterest(amount, rate, years){
  var interestEarned = amount * ((rate / 100)/12);
  return Math.round(interestEarned * 100) / 100; // truncate to two decimal places
}

function calculate(){
  var amount = parseFloat(document.getElementById("startAmount").value);
  var rate = parseFloat(document.getElementById("rateOfReturn").value);
  var years = parseFloat(document.getElementById("years").value);
  var tableElement = document.getElementById("results_table");
  
  var curAmount = amount;
  var tableStr = "<table><tr><th>Month</th><th>Interest</th><th>Balance</th></tr>";
  for(var i = 1; i <= years*12; i++){
    var interestEarned = calcInterest(curAmount, rate, i);
    curAmount += interestEarned;
    tableStr += "<tr><td>" + i + "</td><td>" + interestEarned.toFixed(2) + "</td><td>" + curAmount.toFixed(2) + "</td></tr>";
  }
  tableStr += "</table>";
  tableElement.innerHTML = tableStr;

}

function reset(){
  document.getElementById("startAmount").value = "";
  document.getElementById("rateOfReturn").value = "";
  document.getElementById("years").value = "";
  var tableElement = document.getElementById("results_table");

  tableElement.innerHTML = "";
}