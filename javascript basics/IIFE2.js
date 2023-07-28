(function (window){
    var mygreeter = {};
    mygreeter["name"] = "Henry";
    var greet = "HI!";//note the variable in IIFE1 is also greet and if IIFE is not used that greet which was initialised
    //to hello will be overriden by hi and that would be the new value that would be printed when called on IIFE
    mygreeter["greeting"] = function () {
        console.log(greet + " " + mygreeter.name);
    };
    window.mygreeter = mygreeter;
})(window);