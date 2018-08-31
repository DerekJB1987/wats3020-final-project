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
        },
        
        phone: {
            required: true,
        }
    };
    let validator= new Validator(config);
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
//    validator.validateForm();
    validator.validateName(name);
        if (validator.namevalid === false){
            document.querySelector('#name')
        }
    validator.validateEmail(email);
        if (validator.emailvalid === false){
            document.querySelector('#email')
        }
    validator.validatePhone(phone);
        if (validator.phonevalid === false){
            document.querySelector('#phone')
        }
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

class Error {
    constructor(namevalid, emailvalid, phonevalid = false){
        this.namevalid = name;
        this.emailvalid = email;
        this.phonevalid = phone;
    }
}
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
        } console.log('phoneValid',this.phoneValid)
    }
}

/*declaring config variables: name, email, and phone*/

/*Event listener to handle form submission*/

