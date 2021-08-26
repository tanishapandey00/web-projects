const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//Add Event 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
//More Email validate
const isEmail = (emailVal) =>{
var atSymbol =emailVal.indexOf("@");
if(atSymbol<1) return false;
var dot = emailVal.lastindexOf(".");
if(dot<=atSymbol + 3) return false;
if(dot === emailVal.length-1) return false;
return true;
}
//Define validatte function
const validate = () => {
    const usernameVal = username.value.trim();
    const phoneVal = phone.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    //Validate Username
    if (usernameVal === "") {
        setErrorMsg(username, 'username cannnot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username min 3 characters');
    }else{
        setSuccesMsg(username);
    }
    //Validate email
    if (emailVal === "") {
        setErrorMsg(email, 'email cannnot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid email');
    }else{
        setSuccesMsg(email);
    }
}
function setErrorMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText = errormsgs;
}
function swet