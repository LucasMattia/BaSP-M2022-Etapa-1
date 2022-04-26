var signUp = document.getElementById('signUpButton').addEventListener('click', buttonClick);
function buttonClick(){
    window.location.replace("./sign-up.html");
}

// Email Validation
function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

// Email Validation
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
var inputPass = document.getElementById('password');
inputPass.onblur = function (){
    console.log(inputPass.value);
}

