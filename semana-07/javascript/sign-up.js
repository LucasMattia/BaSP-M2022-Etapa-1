function isLetter(a){
    var ascii = a.charCodeAt(0);
    if (ascii > 64 && ascii < 99){
        return true;
    }else if (ascii > 96 && ascii < 123){
        return true;
    }else{
        return false;   
    }
}
function isNumber(a){
    var ascii = a.charCodeAt(0);
    if (ascii > 47 && ascii < 58){
        return true;
    }
}

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
    var contNum = 0, contLetter = 0, cont;
    for(var i = 0; i < pass.length; i++){
        if(isLetter(pass[i])){
            contLetter++;
        }else if(isNumber(pass[i])){
            contNum++;
        }
    }
    cont = contNum + contLetter;
    if(contNum == 0 || contLetter == 0){
        return false;
    }else if(cont != pass.length){
        return false;
    }else if(pass.length < 7){
        return false;
    }else{
        return true;
    }
}
var inputPass = document.getElementById('password');
var passErrorMsg = document.getElementById('pass-error');
inputPass.onblur = function (){
    if(validatePass(inputPass.value)){
        inputPass.style.border = '2px solid lightgreen';
    }else{
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
    var contNum = 0;
    for(var i = 0; i < phone.length; i++){
        if(isNumber(phone[i])){
            contNum++;
        }
    }
    if(contNum != phone.length){
        return false;
    }else if(phone.length < 10){
        return false;
    }else{
        return true;
    }
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
    var contLetter = 0;
    for(var i = 0; i < firName.length; i++){
        if(isLetter(firName[i])){
            contLetter++;
        }
    }
    if(contLetter != firName.length){
        return false;
    }else if(firName.length < 4){
        return false;
    }else{
        return true;
    }
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
    var contLetter = 0;
    for(var i = 0; i < lastName.length; i++){
        if(isLetter(lastName[i])){
            contLetter++;
        }
    }
    if(contLetter != lastName.length){
        return false;
    }else if(lastName.length < 4){
        return false;
    }else{
        return true;
    }
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
    var contNum = 0;
    for(var i = 0; i < dni.length; i++){
        if(isNumber(dni[i])){
            contNum++;
        }
    }
    if(contNum != dni.length){
        return false;
    }else if(dni.length < 7){
        return false;
    }else{
        return true;
    }
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
    var contNum = 0;
    for(var i = 0; i < zip.length; i++){
        if(isNumber(zip[i])){
            contNum++;
        }
    }
    if(contNum != zip.length){
        return false;
    }else if(zip.length < 4 || zip.length > 5){
        return false;
    }else{
        return true;
    }
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

// Location Validation
var inputLoc = document.getElementById('location');
function validateLoc(location) {
    var contNum = 0, contLetter = 0, cont;
    for(var i = 0; i < location.length; i++){
        if(isLetter(location[i])){
            contLetter++;
        }else if(isNumber(location[i])){
            contNum++;
        }
    }
    cont = contNum + contLetter;
    if(contLetter < 4){
        return false;
    }else if(cont != location.length){
        return false;
    }else{
        return true;
    }
}
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
function validateAdd(address) {
    var blankPos, blankCont = 0;
    for(var i = 0; i < address.length; i++){
        if(address[i] == ' '){
            if(blankCont == 0){
                blankPos = i;
                blankCont++;
            }else{
                return false
            }
        }
    }
    if(blankPos < 5 || blankCont != 1 || address.length == blankPos + 1){
        return false;
    }
    for(var i = 0; i < blankPos; i++){
        if(! isLetter(address[i])){
            return false;
        }
    }
    for(var i = blankPos + 1; i < address.length; i++){
        if(! isNumber(address[i])){
            return false;
        }
    }
    return true;
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
inputAdd.onfocus = function (){
    var addErrorMsg = document.getElementById('add-error');
    addErrorMsg.style.visibility = 'hidden';
    inputAdd.style.color = '#373867';
}

// Repeat password Validation
function validateRePass(rePass){
    if(validatePass(rePass)){
        if(inputPass.value.localeCompare(rePass) == 0){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
var inputRePass = document.getElementById('re-pass');
inputRePass.onblur = function (){
    if(validateRePass(inputRePass.value)){
            inputRePass.style.border = '2px solid lightgreen';
        }else{
        var rePassErrorMsg = document.getElementById('re-pass-error');
        rePassErrorMsg.style.visibility = 'visible';
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
var bDate;
function validateBirthDate(address) {
    if(address[4] != '-'){
        return false;
    }else{
        return true;
    }
}
var inputBirthDate = document.getElementById('birth-date');
inputBirthDate.onblur = function (){
    bDate = inputBirthDate.value;
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
            bDate = (month + '/' + day + '/' + year);
            inputBirthDate.style.border = '2px solid lightgreen';
            console.log(bDate);
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

var submit = document.getElementById('submit').addEventListener('click', buttonClick);
function buttonClick(event){
    event.preventDefault();
    if(validatePass(inputPass.value)
    && validateEmail(inputEmail.value)
    && validateFirName(inputFirName.value)
    && validateLastName(inputLastName.value)
    && validateDni(inputDni.value)
    && validateBirthDate(inputBirthDate.value)
    && validatePhone(inputPhone.value)
    && validateAdd(inputAdd.value)
    && validateLoc(inputLoc.value)
    && validateZip(inputZip.value)
    && validateRePass(inputRePass.value)){
        fetch("https://basp-m2022-api-rest-server.herokuapp.com/signup?name="+ inputFirName.value +
        "&lastName="+ inputLastName.value +
        "&dni="+ inputDni.value +
        "&dob="+ bDate +
        "&phone="+ inputPhone.value +
        "&address="+ inputAdd.value +
        "&city="+ inputLoc.value +
        "&zip="+ inputZip.value +
        "&email="+ inputEmail.value +
        "&password="+ inputPass.value)
            .then (function(response){
                return response.json();
            })
            .then (function(jsonresponse){
                if(jsonresponse.success){
                    window.alert(jsonresponse.msg);
                    console.log(jsonresponse);
                }else{
                    window.alert(jsonresponse.errors[i].msg);
                    console.log(jsonresponse);
                }
            })
            .catch (function (error){
                console.log("error: ", error);
                console.log("Error: respuesta fallida");
            });
    }else{
        window.alert('Input Error: invalid inputs, please try again.');
    }
}