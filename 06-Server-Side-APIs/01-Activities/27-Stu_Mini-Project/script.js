
//  As a user, I can submit a search query from the application to request data and receive a response from the Library of Congress.


var searchBtn = document.getElementById("searchBtn");



function searchBtn() {
            

var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");


var FN = document.createElement("input");
FN.setAttribute("type", "text");
FN.setAttribute("placeholder", "API Name");

            
            var s = document.createElement("input");
            s.setAttribute("type", "submit");
            s.setAttribute("value", "Submit");
              
            
            form.appendChild(FN); 
                         
            
            form.appendChild(s); 

            document.getElementsByTagName("body")[0]
           .appendChild(form);
}






location.replace(https://libraryofcongress.github.io/data-exploration/requests.html#format);