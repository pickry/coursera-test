(function (window){
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    var greet = "Hello!";
    yaakovGreeter.greeting = function (){
        console.log(greet +" " + yaakovGreeter.name);
    };
    window.yaakovGreeter = yaakovGreeter;//exposed yaakovgreeter to window as global and out of this function scope

})(window);
//made an immediately invoked function expression to avoid overring of variables when called in a different page