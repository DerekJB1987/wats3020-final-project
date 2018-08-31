//fetching HTML Elements in variables by ID

console.log('It works');

let contact = document.querySelector('#myform');

contact.addEventListener("submit", function (event) {
    event.preventDefault();
    let config={
        name: {
            required: true
        },
        
        email: {
            required: true,
            email: true
        },
        
        phone: {
            required: true,
            minlength: 10
        }
    };
    let validator= new Validator(config);
    validator.validateForm();
    window.location="received.html"
    });
    


/*Validator class declaration*/

class Validator {
    constructor(config){
        this.config=config;
    }
    
    validateForm(){
        console.log('validate');
    }
   
    validateName(){}
    validateEmail(){}
    validatePhone(){}
}

/*declaring config variables: name, email, and phone*/

/*Event listener to handle form submission*/

