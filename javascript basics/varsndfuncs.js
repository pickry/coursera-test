var message = "in global";
console.log("global : message = "+ message);

var a  = function() {
    var message = "inside a";
    console.log("a : message = "+ message);
    B();
}
function B(){
    console.log("b: message = "+ message);
}

a()
//to declare a variable 
var x = 234;
function a(c, d){
    y = 100;
    y = c+y;
    return y
}

var b = function (){
    return 1000;
}
// a();
// a(3, "a");
//the above 2 statements are completely legal by syntax although mayb not by logic
//in js we have global and lexical/function scope. curly braces donot specify scope like in other languages
//here it is the function
//we can define functions with in functions

/*
*EVERYTHING IN JS IS EXECUTED IN AN EXECUTION CONTEXT
FUNTION INVOCATION CREATES A NEW EXECUTION CONTEXT 
EACH EXECUTION CONTEXT HAS 
1. ITS OWN VARIABLE ENVT
2. SPECIAL 'this' OBJECT
3. REFERENCE TO ITS OUTER ENVT
GLOBAL SCOPE DOES NOT HAVE AN OUTER ENVT AS ITS THE MOST OUTER THERE IS
A VARIABLE REFERENCE WOULD BE FIRST SEARCHED IN ITS FUNCTION SCOPE THE CURRENT SCOPE 
THEN OUTSIDE FUNCTION 
AND SO ON 
IF NOT FOUND IN GLOBAL
VARIABLE IS UNDEFINED
this is scope chaining */

// var x = 2;
// function B(){
//     console.log(x)
//     //this x would be 2 as b's outer reference is the global scope not A
// }
// function A(){
//     var x = 5;
//     B();
// }
// A();
