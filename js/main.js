//fetching HTML Elements in variables by ID

console.log('It works');

/*Validator class declaration*/

class Validator {
    constructor(config){
        this.config=config;
    }
    
/*declaring let variables within form*/

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

/*declaring config variables: name, email, and phone*/

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