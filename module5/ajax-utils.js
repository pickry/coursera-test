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
    function(requestURL, responseHandler){//function defines the request the url needed etc
        var request = getRequestObject();
        request.onreadystatechange = 
        function(){
            handleResponse(request, responseHandler);
        };
        request.open("GET", requestURL, true);//true to be asynchronous
        request.send(null);//sending the actual post request
    };
    function handleResponse(request, responseHandler){
        if((request.redyState == 4) &&
         (request.status == 200)) {
            responseHandler(request);
        }
    }

    global.$ajaxUtils = ajaxUtils;
})(window);
