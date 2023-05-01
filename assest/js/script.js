
  //  Saving all HTML ID's as Variables
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
// var submitError = document.getElementById('submit-error');

// function to validate Name
function validateName() {
    var name = document.getElementById('contact-name').value;

    if( name.length === 0 ){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = '<img src="https://img.icons8.com/office/16/000000/checked--v1.png"/>'
    return true;
}
//

// Function to validate Email
function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if( email.length === 0 ){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<img src="https://img.icons8.com/office/16/000000/checked--v1.png"/>'
    return true;
}

// Function to validate Phone
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
  
    if (phone.length === 0) {
      phoneError.innerHTML = 'Phone Number is required';
      return false;
    }
  
    if (!phone.match(/^\+?\d{11,}$/)) {
      phoneError.innerHTML = 'Phone Number should be at least 11 digits';
      return false;
    }
  
    phoneError.innerHTML = '<img src="https://img.icons8.com/office/16/000000/checked--v1.png"/>';
    return true;
  }
  


// Function to validate Message
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;

    if( left > 0 ){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<img src="https://img.icons8.com/office/16/000000/checked--v1.png"/>'
    return true;
}

// Function to validate Form
// function validateForm() {
//     if( !validateName() || !validateEmail() || !validatePhone() || !validateMessage() ){
//         submitError.innerHTML = 'Please fill the form correctly';
//         return false;
//     }
//     return true;
// }



// $('.button').click(function(event) {
//     event.preventDefault();
  
//     // Get form data
//     const name = $('#name').val();
//     const email = $('#email').val();
//     const subject = $('#subject').val();
//     const message = $('#message').val();
  
//     // Send email using email.js
//     const data = {
//       from_name: name,
//       from_email: email,
//       subject: subject,
//       message_html: message
//     };
//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
//       .then(response => {
//         // Open the success modal
//         $('.popup').addClass('active');
//       }, error => {
//         console.error(error);
//       });
// });


// function sendMail(){
//     var params = {
//         name: document.getElementById("contact-name").value,
//         phone: document.getElementById("contact-phone").value,
//         email: document.getElementById("contact-email").value,
//         product: document.getElementById("product").value,
//         message: document.getElementById("contact-message").value,
//     }
// }
  
// const serviceID = "service_76nrdxa"
// const templateID = "template_ilu1zpb"

// emailjs.send( serviceID, templateID , params)
// .then(
//     res => {
//         document.getElementById("contact-name").value = '';
//         document.getElementById("contact-phone").value = '';
//         document.getElementById("contact-email").value = '';
//         document.getElementById("product").value = '';
//         document.getElementById("contact-message").value = '';
//     }    
// )

// .catch(err => console.log(err));

// const submitBtn = document.getElementById("submit-btn");
// submitBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     sendMail();
// });
