// Email Validation
function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}
var inputEmail = document.getElementById('email');
inputEmail.onblur = function (){
    if(validateEmail(inputEmail.value)){
        inputEmail.style.border = '2px solid lightgreen';
    }else{
        var emailErrorMsg = document.getElementById('email-error');
        emailErrorMsg.style.visibility = 'visible';
        inputEmail.style.border = '2px solid red';
        inputEmail.style.color = 'red';
    }
}
inputEmail.onfocus = function (){
    var emailErrorMsg = document.getElementById('email-error');
    emailErrorMsg.style.visibility = 'hidden';
    inputEmail.style.color = '#373867';
}

// Pasword Validation
function validatePass(pass) {
    var re = /^([a-zA-Z0-9_\-\.]+).{8,}$/;
    return re.test(pass);
}
var inputPass = document.getElementById('password');
inputPass.onblur = function (){
    if(validatePass(inputPass.value)){
        inputPass.style.border = '2px solid lightgreen';
    }else{
        var passErrorMsg = document.getElementById('pass-error');
        passErrorMsg.style.visibility = 'visible';
        inputPass.style.border = '2px solid red';
        inputPass.style.color = 'red';
    }
}
inputPass.onfocus = function (){
    var passErrorMsg = document.getElementById('pass-error');
    passErrorMsg.style.visibility = 'hidden';
    inputPass.style.color = '#373867';
}

// Phone Validation
function validatePhone(phone) {
    var re = /^\d{8}$/;
    return re.test(phone);
}
var inputPhone = document.getElementById('phone');
inputPhone.onblur = function (){
    if(validatePhone(inputPhone.value)){
        inputPhone.style.border = '2px solid lightgreen';
    }else{
        var phoneErrorMsg = document.getElementById('phone-error');
        phoneErrorMsg.style.visibility = 'visible';
        inputPhone.style.border = '2px solid red';
        inputPhone.style.color = 'red';
    }
}
inputPhone.onfocus = function (){
    var phoneErrorMsg = document.getElementById('phone-error');
    phoneErrorMsg.style.visibility = 'hidden';
    inputPhone.style.color = '#373867';
}

// First Name validation
function validateFirName(firName) {
    var re = /^([A-Za-z]+){3,}$/;
    return re.test(firName);
}
var inputFirName = document.getElementById('f-name');
inputFirName.onblur = function (){
    if(validateFirName(inputFirName.value)){
        inputFirName.style.border = '2px solid lightgreen';
    }else{
        var firNameErrorMsg = document.getElementById('f-name-error');
        firNameErrorMsg.style.visibility = 'visible';
        inputFirName.style.border = '2px solid red';
        inputFirName.style.color = 'red';
    }
}
inputFirName.onfocus = function (){
    var firNameErrorMsg = document.getElementById('f-name-error');
    firNameErrorMsg.style.visibility = 'hidden';
    inputFirName.style.color = '#373867';
}

// Last Name validation
function validateLastName(lastName) {
    var re = /^([A-Za-z]+){3,}$/;
    return re.test(lastName);
}
var inputLastName = document.getElementById('l-name');
inputLastName.onblur = function (){
    if(validateLastName(inputLastName.value)){
        inputLastName.style.border = '2px solid lightgreen';
    }else{
        var lastNameErrorMsg = document.getElementById('l-name-error');
        lastNameErrorMsg.style.visibility = 'visible';
        inputLastName.style.border = '2px solid red';
        inputLastName.style.color = 'red';
    }
}
inputLastName.onfocus = function (){
    var lastNameErrorMsg = document.getElementById('l-name-error');
    lastNameErrorMsg.style.visibility = 'hidden';
    inputLastName.style.color = '#373867';
}