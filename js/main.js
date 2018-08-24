//fetching HTML Elements in variables by ID
/*eslint-disable no-empty-label, no-redeclare*/
var x = document.getElementById("form_sample");
 
var createform = document.createElement('form'); // Create New Element form
 createform.setAttribute("action", ""); // Setting action Attribute on form
 createform.setAttribute("method", "post"); // Setting method Attribute on form
 x.appendChild(createform);
 
var heading = document.createElement('h2'); // Heading of form
 heading.innerHTML = "Contact Form ";
 createform.appendChild(heading);
 
var line = document.createElement('hr'); //giving horizontal row after heading
 createform.appendChild(line);
 
var linebreak = document.createElement('br');
 createform.appendChild(linebreak);
 
var namelabel = document.createElement('label'); // Create Label for name field
 namelabel.innerHTML = "Your Name : "; // Set Field Labels
 createform.appendChild(namelabel);
 
var inputelement = document.createElement('input'); // Create input field for name
 inputelement.setAttribute("type", "text");
 inputelement.setAttribute("name", "dname");
 createform.appendChild(inputelement);
 
var linebreak = document.createElement('br');
 createform.appendChild(linebreak);
 
var emaillabel = document.createElement('label'); //Create Label for email field
 emaillabel.innerHTML = "Your Email : ";
 createform.appendChild(emaillabel);
 
var emailelement = document.createElement('input'); // Create input field for email
 emailelement.setAttribute("type", "text");
 emailelement.setAttribute("name", "demail");
 createform.appendChild(emailelement);
 
var emailbreak = document.createElement('br');
 createform.appendChild(emailbreak);
 
 