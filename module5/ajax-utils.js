(function (global){
    var ajaxUtils = {};
    function getRequestObject(){//checks what type of object is available to us
        if (window.XMLHttpRequest){//returns http type object
            return (new XMLHttpRequest());
        }
        else if(window.ActiveXObject){
            return (new ActiveXObject("Microsoft.XMLHTTP"));

        }
        else{
            global.alert("Ajax is not supported!");
            return (null);
        }

    }
    ajaxUtils.sendGetRequest = 
    function(requestURL, responseHandler, isJsonResponse){//function defines the request the url needed etc
        var request = getRequestObject();
        request.onreadystatechange = 
        function(){
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open("GET", requestURL, true);//true to be asynchronous
        request.send(null);//sending the actual post request
    };
    function handleResponse(request, responseHandler){
        if((request.readyState == 4) &&
         (request.status == 200)) {
            if (isJsonResponse == undefined){
                isJsonResponse = true;
            }
            if(isJsonResponse){
                responseHandler(JSON.parse(request.responseText));
            }
            else{
                responseHandler(request.responseText);
            }
            
        }
    } 

    global.$ajaxUtils = ajaxUtils;
})(window);
