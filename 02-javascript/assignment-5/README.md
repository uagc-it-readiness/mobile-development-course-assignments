## Assignment 5 - DOM - Savings Calculator
Create a savings calculator that will calculate how much a savings account would generate each month if compounded monthly.

1. Open index.html and main.js in your code editor.
2. Add an h3 header with the text "Savings Calculator".
3. Add an opening and closing p tag
4. Within the p tag, add "Starting amount: ".
5. Immediate afterward the text add an input tag with an attribute of type="number", also give it an id of "amount".
```
<p>
   Starting amount: <input type="text" id="amount" />
</p>
```
6. Repeat steps 3 through 5 to create another input field for the rate of return with the text "Rate of return (percent): " and an id attribute of "rate".
7. Repeat steps 3 through 5 to create another input field for the rate of number of years with the text "Years: " and an id attribute of "years".
8. Add two input tags with a type of "button".
9. Give the first button a value attribute of "Calculate" and an onclick attribute that is equal to "calculate()".
10. Give the second button a value attribute of "Reset" and an onclick attribute that is equal to "reset()".
11. Add another p tag with in id of "results_table" that will hold the generated results table.
12. Open the main.js file and define the calculate and reset functions. calculate should generate a view like that below. reset should clear out the results table. <br>
![Results Image](assignment-5-results.JPG?raw=true)

Hints
* To calculate the interest earned for the first month use 'amount * ((rate / 100)/12)'
* inputElement.value returns a string. Convert it to a number with parseFloat(value)
* To round a value to two decimal places use Math.round(myNum * 100) / 100
* To display a number with two decimal places so that 500.50 isn't shown as 500.5, use myNum.toFixed(2).