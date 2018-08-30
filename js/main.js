//fetching HTML Elements in variables by ID

console.log('It works');

/*Prompt visitor to enter information*/

class validator {
    constructor(config){
        this.config=config;
    }
}
validate(){
    for ()
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value.indexOf("@");
    let phone = document.getElementById("phone").value;
}
validateName(){}
validateEmai(){}
validatephone(){}

let config=[
    {type:name
    required: true
    id:"#name";
    }
    
    {type:email
    required: true
    id:"#emai;";
    }
    
    {type:phone
    required: true
    id:"#phone";
    }
];

let validator=newValidator(config);
validator.validate()
/*Event listener to handle form submission*/

let contact = document.querySelector('#contactform');

contact.addEventListener("submit", function (event) {
    event.preventDefault();
    validatemyForm();
  });