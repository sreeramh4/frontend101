function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}


// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy",function(n) {return "ha".repeat(n) + "!";});