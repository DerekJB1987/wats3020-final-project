//fetching HTML Elements in variables by ID

console.log('It works');

/*Prompt visitor to enter information*/

    var name = document.getElementById(Name").value;
    var at = document.getElementById("email").value.indexOf("@");
    var phone = document.getElementById(phone").value;
    submitOk = "true";
    
    if (name.length > 20) {
        alert("The name may have no more than 20 characters");
        submitOK = "false";
    }
    
    if (at == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
    }
    
    if (phone.length > 10) {
        alert("The name may have no more than 10 characters");
        submitOK = "false";
    }    

    if (submitOK == "false") {
      return false;
    }

/*Event listener to handle form submission*/

let contact = document.querySelector('#contactform');

contact.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });