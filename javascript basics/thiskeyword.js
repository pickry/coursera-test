function test(){
    console.log("Hello world");
    this.name = "Adrija";
}
test()
console.log(window.name);//this is property of window global object

//FUNCTION CONSTRUCTOR
//CONVENTION TO START FUNCTION CONSTRUCTOR NAME WITH CAPITAL LETTER
function Circle (radius){
    this.radius = radius;
    console.log(this); 
    //can't return anything else we won't get required behaviour
    this.area = function (){
        return Math.PI * Math.pow(this.radius, 2);
    }
    
}
//another way of declaring an object
var myCircle = new Circle(19);//much like new Object();
//when new used, js uses this to point the function itself.
console.log(myCircle);
console.log(myCircle.area);//gives what the object is...text i.e. myCircle area property how it is defined
console.log(myCircle.area());//here we called the function
//since we are using the new keyword we keep making new objects over and over again
//means the function is separate for each object made....the readius property is separate for each circle but area function is same for any circle
//hence we have prototype
/**
 * for prototype the memory location is same for the function 
 * the new objects donot have their own functions in different memory addresses
 * a prototype is read as __proto__ on the console
 * refer file function prototype
 */

