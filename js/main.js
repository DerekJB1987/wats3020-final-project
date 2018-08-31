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
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
//    validator.validateForm();
    validator.validateName(name);
    validator.validateEmail(email);
    validator.validatePhone(phone);
//    window.location="received.html"
    });
    


/*Validator class declaration*/

class Validator {
    constructor(config){
        this.config=config;
        this.namevalid=true;
        this.emailvalid=true;
        this.phonevalid=true;
    }
    
//    validateForm(){
//        console.log('validate');
//    }
   
    validateName(testName){
        console.log(testName)
        if (this.config.name.required === true) {
            if (testName.length ===0){
                this.nameValid=false;
            } else this.nameValid=true;
        }
        console.log('nameValid',this.nameValid)
    }

    validateEmail(testEmail){
        console.log(testEmail)
        if (this.config.email.required === true) {
            if (testEmail.length ===0){
                this.emailValid=false;
            } else this.emailValid=true;
        }
        console.log('emailValid',this.emailValid)
    }
    
    validatePhone(testPhone){
        console.log(testPhone)
        if (this.config.phone.required === true) {
            if (testPhone.length ===0){
                this.phoneValid=false;
            } else this.phoneValid=true;
        }
    } console.log('phoneValid',this.phoneValid)
}

/*declaring config variables: name, email, and phone*/

/*Event listener to handle form submission*/

