//fetching HTML Elements in variables by ID

console.log('It works');

/*Prompt visitor to enter information*/

function validateForm()                                   
{
    var name = document.forms["contact"]["Name"].value;
        if (name == "") {
            alert("Name must be filled out");
            return false;            
        }
        
    var email = document.forms["contact"]["email"].value;
        if (email == "") {
            alert("An email must be provided");
            return false;
        }
        
    var phone = document.forms["contact"]["phone"].value;
        if (phone == "") {
            alert("A Phone number must be provided");
            return false
        }      
}

/*Event listener to handle  form submission*/

contact.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });
  
  