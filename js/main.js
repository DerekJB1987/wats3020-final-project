//fetching HTML Elements in variables by ID

console.log('It works');

/*Prompt visitor to enter information*/

class Validator {
    constructor(config){
        this.config=config;
    }

    validate() {
        for()   
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value.indexOf("@");
        let phone = document.getElementById("phone").value;
    }
   
    validateName(){}
    validateEmai(){}
    validatephone(){}
}

let config=[
    name: {
        required: true;
    };
    
    email: {
        required: true,
        email: true
    };
    
    phone: {
        required: true;
        minlength: 10;
    };
];

let Validator=new validator(config);
Validator.validate()

/*Event listener to handle form submission*/

let contact = document.querySelector('#contactform');

contact.addEventListener("submit", function (event) {
    event.preventDefault();
    validatemyForm();
  });