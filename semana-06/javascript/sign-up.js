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

// DNI validation
function validateDni(dni) {
    var re = /^\d{7,}$/;
    return re.test(dni);
}
var inputDni = document.getElementById('dni');
inputDni.onblur = function (){
    if(validateDni(inputDni.value)){
        inputDni.style.border = '2px solid lightgreen';
    }else{
        var dniErrorMsg = document.getElementById('dni-error');
        dniErrorMsg.style.visibility = 'visible';
        inputDni.style.border = '2px solid red';
        inputDni.style.color = 'red';
    }
}
inputDni.onfocus = function (){
    var dniErrorMsg = document.getElementById('dni-error');
    dniErrorMsg.style.visibility = 'hidden';
    inputDni.style.color = '#373867';
}

// Zip code Validation
function validateZip(zip) {
    var re = /^\d{3,}$/;
    return re.test(zip);
}
var inputZip = document.getElementById('z-code');
inputZip.onblur = function (){
    if(validateZip(inputZip.value)){
        inputZip.style.border = '2px solid lightgreen';
    }else{
        var zipErrorMsg = document.getElementById('z-code-error');
        zipErrorMsg.style.visibility = 'visible';
        inputZip.style.border = '2px solid red';
        inputZip.style.color = 'red';
    }
}
inputZip.onfocus = function (){
    var zipErrorMsg = document.getElementById('z-code-error');
    zipErrorMsg.style.visibility = 'hidden';
    inputZip.style.color = '#373867';
}

// Pasword Validation
function validateLoc(location) {
    var re = /^([a-zA-Z]{3})[a-zA-Z0-9]+$/;
    return re.test(location);
}
var inputLoc = document.getElementById('location');
inputLoc.onblur = function (){
    if(validateLoc(inputLoc.value)){
        inputLoc.style.border = '2px solid lightgreen';
    }else{
        var locErrorMsg = document.getElementById('loc-error');
        locErrorMsg.style.visibility = 'visible';
        inputLoc.style.border = '2px solid red';
        inputLoc.style.color = 'red';
    }
}
inputLoc.onfocus = function (){
    var locErrorMsg = document.getElementById('loc-error');
    locErrorMsg.style.visibility = 'hidden';
    inputLoc.style.color = '#373867';
}

// Address Validation
function validateAdd(Address) {
    var re = /^([a-zA-Z]{4,})\s([a-zA-Z0-9]+)$/;
    return re.test(Address);
}
var inputAdd = document.getElementById('address');
inputAdd.onblur = function (){
    if(validateAdd(inputAdd.value)){
        inputAdd.style.border = '2px solid lightgreen';
    }else{
        var addErrorMsg = document.getElementById('add-error');
        addErrorMsg.style.visibility = 'visible';
        inputAdd.style.border = '2px solid red';
        inputAdd.style.color = 'red';
    }
}
inputLoc.onfocus = function (){
    var addErrorMsg = document.getElementById('add-error');
    addErrorMsg.style.visibility = 'hidden';
    inputAdd.style.color = '#373867';
}

// Repeat password Validation
function validateRePass(rePass) {
    var re = /^([a-zA-Z0-9]+).{8,}$/;
    return re.test(rePass);
}
var inputRePass = document.getElementById('re-pass');
inputRePass.onblur = function (){
    if(validateRePass(inputRePass.value)){
        if(inputPass.value.localeCompare(inputRePass.value) == 0){
            inputRePass.style.border = '2px solid lightgreen';
        }else{
            var rePassErrorMsg = document.getElementById('re-pass-error');
            rePassErrorMsg.style.visibility = 'visible';
            rePassErrorMsg.textContent = "Error: passwords does not match";
            inputRePass.style.border = '2px solid red';
            inputRePass.style.color = 'red';
        }
    }else{
        var rePassErrorMsg = document.getElementById('re-pass-error');
        rePassErrorMsg.style.visibility = 'visible';
        rePassErrorMsg.textContent = 'Error: password invalid';
        inputRePass.style.border = '2px solid red';
        inputRePass.style.color = 'red';
    }
}
inputRePass.onfocus = function (){
    var rePassErrorMsg = document.getElementById('re-pass-error');
    rePassErrorMsg.style.visibility = 'hidden';
    inputRePass.style.color = '#373867';
}

// Birth date Validation
function validateBirthDate(Address) {
    var re = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
    return re.test(Address);
}
var inputBirthDate = document.getElementById('birth-date');
inputBirthDate.onblur = function (){
    var bDate = inputBirthDate.value;
    if(validateBirthDate(bDate)){
        var year = bDate.substring(0,4);
        var month = bDate.substring(5,7);
        var day = bDate.substring(8,10);
        if(Number(year) <= 1920 || Number(year) >= 2004){
            var bDateErrorMsg = document.getElementById('b-date-error');
            bDateErrorMsg.style.visibility = 'visible';
            inputBirthDate.style.border = '2px solid red';
            bDateErrorMsg.textContent = 'year must be between 1920 and 2002';
            inputBirthDate.style.color = 'red';
        }else{
            bDate = (day + '/' + month + '/' + year);
            inputBirthDate.style.border = '2px solid lightgreen';
        }
    }else{
        var bDateErrorMsg = document.getElementById('b-date-error');
        bDateErrorMsg.style.visibility = 'visible';
        inputBirthDate.style.border = '2px solid red';
        inputBirthDate.style.color = 'red';
    }
}
inputBirthDate.onfocus = function (){
    var bDateErrorMsg = document.getElementById('b-date-error');
    bDateErrorMsg.textContent = 'Error: invalid birth date';
    bDateErrorMsg.style.visibility = 'hidden';
    inputRePass.style.color = '#373867';
}