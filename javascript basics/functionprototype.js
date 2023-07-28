function Circle(radius){
    this.radius = radius;
    // Circle.prototype.getArea = function (){
    //     return Math.PI * Math.pow(this.radius, 2);
    // }
}
Circle.prototype.getArea = function (){
    return Math.PI * Math.pow(this.radius, 2);
}//this should be rather outside the function than inside.
var myCircle = new Circle(10);
console.log(myCircle.getArea());
console.log(myCircle.getArea);
console.log(myCircle);

var otherCircle = new Circle(20);
console.log(otherCircle.getArea());
console.log(otherCircle.getArea);
console.log(otherCircle);
