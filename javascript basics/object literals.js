var literalCircle = {
    radius : 10,
    getARea: function (){
        console.log(this);
        console.log("Then me 2");
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log("I am first");
console.log(literalCircle);
console.log("Me last");
console.log(literalCircle.getARea());
//these are just like function constructors but objects

//now if for a similar object i declare a function inside the function object
//and change value of property using this keyword then there is an error the property is not changed.
//for example.
var coffee = {
    grade : 100,
    Cost : function(){
        var self = this;
        console.log(this);
        var improved = function (){
            self.grade = 50;
            //this.grade = 50;
        };
        improved();
        return this.grade * 61;
    }
}
console.log(coffee)
console.log(coffee.Cost())
//the value of line 30 is same as given grade and not changed by improved function
//this happens because the this of improved is now pointing to the window global variable
//not to coffee literal i.e. window.grade = 50
//to get around this don't use this of the inner function but carry this
//by the object literal somehow. use self.
//var self = this;

