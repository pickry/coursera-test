var arr = new Array();
arr[0] = 33;
arr[1] = "NAME";
arr[2] = {x: 200};
arr[3] = function (val){
    return 2*val;
}
console.log(arr)
console.log(arr[3](arr[0]));
console.log(arr[2].x);

arr2 = ["Mishri", "Namra", "Kishmish"]
arr2.greeting = "Ciao!"

for (var i in arr2){
    console.log("Getting "+ arr2[i]);
}
/**OUTPUT
 * Getting Mishri
 * Getting Namra
 * Getting Kishmish
 * Getting Ciao!
 */