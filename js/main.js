//fetching HTML Elements in variables by ID
/*eslint-disable no-empty-label, no-redeclare*/





function form()                                   
{
    var name = document.getElementbyID("Name");
    var mail = document.getElementById("Mail");
    var email = document.getElementById("Email"); 
    var phone = document.getElementById("Phone");
    
    if (name.value === "")                                 
        {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }
    if (address.value === "")                              
    {
        window.alert("Please enter your address.");
        name.focus();
        return false;
    }
      
    if (email.value === "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    
    if (phone.value === "")                          
    {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;