document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector("button").addEventListener("click", 
    function(){
        $ajaxUtils.sendGetRequest("name.json", 
        function(res){
            // var name = request.responseText;
            // console.log(self.name)
            // document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!";
            var message = res.firstname + " " + res.lastname
            if (res.likesChineseFood){
                message += " likes Chinese food";
            }
            else{
                message += " doesn't likes Chinese Food";
            }
            message += " and uses ";
            message += res.numberOfDisplays;
            message += " displays for coding.";

            document.querySelector("#content").innerHTML = "<h2>" + message +"</h2>"
        });
        
        
    });
});