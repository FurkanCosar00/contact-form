let firstName = document.querySelector('.first_name');
let lastName = document.querySelector('.last_name');
let email = document.querySelector('.email');
let message = document.querySelector('.message');
let consent = document.querySelector('.input_consent');
let button = document.querySelector('.submit_button');

let general = document.querySelector('.general');
let support = document.querySelector('.support');

let firstNameError = document.querySelector('.first_name_error');
let lastNameError = document.querySelector('.last_name_error');
let emailError = document.querySelector('.email_error');
let queryTypeError = document.querySelector('.query_type_error');
let messageError = document.querySelector('.message_error');
let consentError = document.querySelector('.consent_error');

let nameLi =document.querySelector('.name_li p');
let lastLi =document.querySelector('.last_li');
let emailLi =document.querySelector('.email_li');
let queryLi =document.querySelector('.query_li');
let messageLi =document.querySelector('.message_li');



function submitToConsole() {
    firstName = firstName.value;
    lastName = lastName.value;
    email = email.value;
    message = message.value;


    if (firstName == '' || firstName == null) {
        firstNameError.innerText = 'This field is required';
        firstNameError.style.color = '#D73C3C';
    }
    if (lastName == '' || lastName == null) {
        lastNameError.innerText = 'This field is required';
        lastNameError.style.color = '#D73C3C';
    }
    if (email == '' || email == null) {
        emailError.innerText = 'Please enter a valid email address';
        emailError.style.color = '#D73C3C';
    }
    if (message == '' || message == null) {
        messageError.innerText = 'This field is required';
        messageError.style.color = '#D73C3C';
    }

    if (consent.checked) {
        if (general.checked) {
            nameLi.innerText = firstName;
            lastLi.innerText = lastName;
            emailLi.innerText = email;
            queryLi.innerText = 'General Enquiry';
            messageLi.innerText = message;

        } 
        else {
            nameLi.innerText = firstName;
            lastLi.innerText = lastName;
            emailLi.innerText = email;
            queryLi.innerText = 'Support Request';
            messageLi.innerText = message;
        }
    }
    else {
        consentError.innerText = 'To submit this form, please consent to being contacted';
        consentError.style.color = '#D73C3C';
    } 
}


button.addEventListener('click', submitToConsole);