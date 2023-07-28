//use ajax to pull data from server without reloading page
//Document object model DOM manipulation
//we have window object that has the document object
//write on console window.document 
/**
 * you find the overall skeleton of html page there
 * now to get a particular element of the html doc in js console, 
 */
// console.log(document.getElementById("title"))
// console.log(document instanceof HTMLDocument)

// function sayHello(event){
//     // console.log(
//     //     document.getElementById("thip").value
//     // );//shows the name entered in input box
//     console.log(this)//function belongs to global object window
//     this.textContent = "Said it!";//as the button is clicked the text content of button changes to said it from say it
//     var name = document.getElementById("thip").value;
//     var message = "<h2>Hello " + name + " !</h2>";
//     //document.getElementById("content").textContent = message;//text content doesn't detect html tags but
//     document.getElementById("content").innerHTML = message;//does
//     if (name === "Students"){
//         var title = document.querySelector("#title").textContent;
//         title += "& lovin' it";
//         document.getElementById("title").innerHTML = title;
//     }
    
// }
// //unobstructive event binding
// document.querySelector("button").addEventListener("click", sayHello);
// // document.querySelector("button").onclick = sayHello;

/**to load all this before css or images put it in an eventlistner on event DOMContentLoaded with the function that
 * includes all the functions and events you want to carry out at the time of loading
 */
document.addEventListener("DOMContentLoaded", function (event) {
    function sayHello(event){
        // console.log(
        //     document.getElementById("thip").value
        // );//shows the name entered in input box
        console.log(this)//function belongs to global object window
        this.textContent = "Said it!";//as the button is clicked the text content of button changes to said it from say it
        var name = document.getElementById("thip").value;
        var message = "<h2>Hello " + name + " !</h2>";
        //document.getElementById("content").textContent = message;//text content doesn't detect html tags but
        document.getElementById("content").innerHTML = message;//does
        if (name === "Students"){
            var title = document.querySelector("#title").textContent;
            title += "& lovin' it";
            document.getElementById("title").innerHTML = title;
        }
        
    }
    //unobstructive event binding
    document.querySelector("button").addEventListener("click", sayHello);
    // document.querySelector("button").onclick = sayHello;
    document.querySelector("body").addEventListener("mousemove", function (event) {
        if (event.shiftKey === true){
            console.log("x: " + event.clientX + ' y: ' + event.clientY);
        }
    });
})