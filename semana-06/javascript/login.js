//Sign Up button
var signUp = document.getElementById('signUpButton').addEventListener('click', toSignUp);
function toSignUp(){
    window.location.replace("./sign-up.html");
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
    var re = /^([a-zA-Z0-9_\-\.]+).{8,}$/
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

//Log In button
var submit = document.getElementById('submit').addEventListener('click', buttonClick);
function buttonClick(){
    if(validatePass(inputPass.value) && validateEmail(inputEmail.value)){
        window.alert('Successful login!\n\nEmail: '+ inputEmail.value + '\nPassword: ' + inputPass.value);
    }else{
        window.alert('Error: Email or password invalid, please try again.');
    }
}