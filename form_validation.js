const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//Add Event
form.addEventListener('submit', (event) => {
    event.preventDefault();  //Default mai binaa kuch enter kiyee submit nhi hogaa//
    validate();
})
//More Email validate
function isEmail(emailval) {
    var atSymbol = emailval.indexOf("@");
    if (atSymbol < 1) {
        return false;
    }
    var dot = emailval.lastIndexOf(".");
    if (dot <= atSymbol + 2) {
        return false;
    }
    if(dot === emailval.length -1){
        return false;
    }
    return true;
}
//Defining Validate function
function validate() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const phoneval = phone.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    //Validate username
    if (usernameval === "") {
        setErrorMsg(username, 'user cannot be blank');
    }
    else if (usernameval.length <= 2) {
        setErrorMsg(username, 'user 3 characters');
    }
    else {
        setSuccessMsg(username);
    }
    // Validate Email
    if (emailval === "") {
        setErrorMsg(email, 'email cannot be blank');
    }
    else if (!isEmail(emailval)) {
        setErrorMsg(email, 'Not a valid emal');
    }
    else {
        setSuccessMsg(email);
    }
}
function setErrorMsg( input , errormsgs){
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = "form-control error";
small.innerText = errormsgs;
}