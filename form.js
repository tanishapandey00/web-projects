const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});
// senddata function
function sendData(sRate,count){
    if(sRate===count){
        alert('Registration sucess full');
        swal("Welcome" + usernameVal , "Registration Sucessfull You clicked the button!", "success");
    }
}
//for final data validation
function successMsg(){
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i=0; i<formCon.length ;i++){
       if(formCon[i].className === "form-control success"){
        var sRate = 0 + i;
        sendData(sRate,count);
       }
       else{
           return false;
       }
    }
}
function checkInputs() {
    //get the values
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();

    //Validate username
    if (usernameVal === '') {
        //show error
        setErrorFor(username, 'Username cannot be blank');
    }
    else if (usernameVal.length < 3) {
        setErrorFor(username, 'Username cannot be smaller then 3');
    }
    else if (usernameVal.length > 20) {
        setErrorFor(username, 'Username cannot be larger then 20');
    }
    else {
        //add success class
        setSuccessFor(username);
    }
    //validate email
    if (emailVal === '') {
        setErrorFor(email, 'Email cannot be blank');
    }
    else if (emailVal.indexOf("@") <= 0) {
        setErrorFor(email, 'Invalid Email');
    }
    else if (emailVal.charAt(emailVal.length - 4) != '.') {
        setErrorFor(email, 'Invalid Email');
    }
    
    else {
        setSuccessFor(email);
    }
    //Validate Phone Number
    if(numberVal === ''){
        setErrorFor(number, 'Phone number cannot be Empty');
    }
    else if(numberVal.length != 10){
        setErrorFor(number, 'Phone number is larger then 10');
    }
    else{
        setSuccessFor(number);
    }
    //Validate Password
    if (passwordVal === '') {
        setErrorFor(password, 'Empty Box');
    }
    else if (passwordVal.length < 5) {
        setErrorFor(password, 'Very Small Password');
    }
    else if (passwordVal.length > 25) {
        setErrorFor(password, 'Too long Password');
    }
    else {
        setSuccessFor(password);
    }
    //Validate Confirm password
    if(password2Val === ''){
        setErrorFor(password2 , 'Empty Box');
    }
    else if (password2Val != passwordVal) {
        setErrorFor(password2, 'Password does not match');
    }
    else {
        setSuccessFor(password2);
    }
    //last check

}
function setErrorFor(input, massage) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error class to formcontrol
    small.innerText = massage;
    //add error class
    formControl.className = "form-control error";
}
function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    formControl.className = "form-control success";
}
