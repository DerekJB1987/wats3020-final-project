//fetching HTML Elements in variables by ID
/*eslint-disable no-empty-label, no-redeclare*/

function form()                                   
{
    var name = document.forms["login"]["Name"];    
    var address =  document.forms["login"]["Mail"]; 
    var email = document.forms["login"]["EMail"];   
    var phone = document.forms["login"]["Phone"]; 
    var username = document.forms["login"]["Username"];
    var password = document.forms["login"]["Password"]; 
    
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
    }
    
    if (username.value === "")
    {
        
        window.alert('Please enter your username.');
        username.focus();
        return false;
    }
    
    if (password.value === "")                       
    {
        window.alert("Please enter your password");
        password.focus();
        return flase;
    }
