//functions are objects in javascript they are first class data types
function multiply(x, y){
    return x*y;
}
multiply.version = "v.0.0.1";
console.log(multiply.toString());//this is getting the functions value and multiply() is calling function.
console.log(multiply.version);
console.log("3 times 2 is "+ multiply(3, 2));
//IMPORTANT
//function factory !!!!!
function multiplyby(multiplier){
    var ans = function (x){
        console.log("This is x "+ x);
        return multiplier * x;
    };
    console.log("This is multiplier " + multiplier);
    return ans;
}
var by3 = multiplyby(3);
//!!!we assign ans the function variable to by3 and hence it also needs an argument (the ans variable) hence the argument is 10
console.log(by3(10));
var twice = multiplyby(2);
console.log(twice(1000));


//PASSING FUNCTIONS AS ARGUMENTS
function operationson(x, operation){
    return operation(x);
}
var domult = operationson(5, by3)//note the by3 is not function call but a reference to the function :()
console.log(domult)

//by reference and by value
//by value : if  b=a is passed or copied by value then any change in b won't affect the value of a
//by reference: if b=a passed by reference then any change in value of b would affect the value of a, kinda pointing to the same location
//in javascript primitive data types are passed by value or copied by value and the object data types are passed by reference
//under the hood everything is passed by value, it is just the way the data types are stored in memory

var a = 5;
var b = a;
console.log(a + b);
b = 44;
console.log(a + b);

var a = {x:7};
var b = a;
console.log(a);
console.log(b);
b.x = 9;
console.log(a);
console.log(b);


function primi(value){
    console.log("Value before change: "+ value);
    value = 383;
    console.log("Value now: "+ value);

}
tim = 2;
primi(tim);
console.log(tim+ " But value of parameter passed is different outside the function as it is just pass by value");
//pass by reference
function changeobj(objectval){
    console.log(objectval);
    objectval.x = 3;
    console.log(objectval);
}

obj = {x: 29}
changeobj(obj)
console.log(obj);//apparently u can't print quoted text with object representation i.e. obj value pair in {}, so separately.