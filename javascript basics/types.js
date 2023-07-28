//7 data types 6 primitive(single and immutable) 1 object type
//object is a collection of name value pairs
//we have undefined which is when a variable is declared but has no value assigned it is completely different from null and not defined
//strict equality and equality
//equality does a type coercion which converts the type of a variable in order to match it if comparison is of different data types

var x = "4", y = 4;
if (x == y){
    console.log("Equality check")
}
if (x  === y){
    console.log("Strict equality check")
}
else{
    console.log("Strict worked")
}

if ("" || 0 || false || null || NaN || undefined){
    console.log("Never printed")
}
else{
    console.log("Always this");
}
if (true && "S" && 1 && -1 && "false"){
    console.log("Runs always");
}
else{
    console.log("Never")
}
/*
Boolean("Hemloo")
true
Boolean(null) // this is to check value
false
*/