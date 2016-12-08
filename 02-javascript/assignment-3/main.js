function range(start, end) {
    // your code here
}

function sum(array) {
    // your sum function here
}


// do not edit below this line

// test the range function
function testRangeFunction() {
    var resultString = "testRangeFunction:";

    if ([1,2,3,4,5,6,7,8,9,10].equals(range(1, 10)) 
        && [0,1,2,3,4,5].equals(range(0, 5)))
        resultString += "pass";
    else
        resultString += "fail";

    console.log(resultString);
}

// test the range function
function testSumFunction() {
    var resultString = "testSumFunction:";

    if (sum(range(1,10) === 55))
        resultString += "pass";
    else
        resultString += "fail";

    console.log(resultString);
}


// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});