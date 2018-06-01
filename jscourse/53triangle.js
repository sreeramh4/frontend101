/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length

function buildTriangle(num){
    var line=""
    for(var l=1; l<=num; l++){
       line+=makeLine(l);
    }
    return line;
}

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

//console.log(makeLine(4));
// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
console.log(buildTriangle(5));