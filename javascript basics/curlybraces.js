//position of curly braces matter
function a()
{
    return 
    {
        name: "Yaokk";
    };
}
function b(){
    return{
        name:"YAkovi"//not that a semicolon is not needed here its more like a list with single value only this is an object here name
    };
}
console.log(a())
console.log(b())
for(var i=0;i<10;i++){
    console.log(i*2);
}
function sandwich(grilled){
    grilled = grilled || "whatever";
    
    console.log("The sandwich should be " + grilled);
}
sandwich("cheesy");
sandwich();