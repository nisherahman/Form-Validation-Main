// get element form html;
var firstName = document.getElementById('firstName');
var firstErr = document.getElementById('firstErr');

var surName = document.getElementById('surName');
var surErr = document.getElementById('surErr');

var userEmail = document.getElementById('userEmail');
var emailErr = document.getElementById('emailErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

var rePass = document.getElementById('rePass');
var rePassErr = document.getElementById('rePassErr');


// create a function for submit button;
function subm(){
    //firstnameerr
    if(firstName.value == ""){
        firstName.style.borderColor ="#b22222";
        firstName.focus();
        firstErr.innerHTML = "Please enter your first name";
        return false;
    }
    //surnameerr
       if(surName.value == ""){
        surName.style.borderColor ="#b22222";
        surName.focus();
        surErr.innerHTML = "Please enter your surname";
        return false;
    }
    //emailerr
     if(userEmail.value == ""){
        userEmail.style.borderColor ="#b22222";
        userEmail.focus();
        emailErr.innerHTML = "Please enter your email";
        return false;
    }
    //passerr
    if(pass.value == ""){
        pass.style.borderColor ="#b22222";
        pass.focus();
        passErr.innerHTML = "Please enter your email";
        return false;
    }
    if(pass.value.length <= 5){
        pass.style.borderColor = "#d22222";
        pass.focus();
        passErr.innerHTML = "password must be 6 letters";
        return false;
    }
    //repasserr
    if(rePass.value == ""){
        rePass.style.borderColor ="#b22222";
        rePass.focus();
        rePassErr.innerHTML = "Please enter your password";
        return false;
    }
    if(rePass.value != pass.value){
        rePass.style.borderColor = "#d22222";
        rePass.focus();
        rePassErr.innerHTML = "passwords did not match";
        return false;
        }   
}

// create a function for remove error
function errorRemove(){
    //username
    if(firstName.value != ""){
        firstName.style.borderColor = "#dddddd";
        firstErr.innerHTML = ""; 
    }
    //surname
    if(surName.value != ""){
        surName.style.borderColor = "#dddddd";
        surErr.innerHTML = ""; 
    }
    //email
     if(userEmail.value != ""){
        userEmail.style.borderColor = "#dddddd";
        emailErr.innerHTML = ""; 
    }
    //password
    if(pass.value != ""){
        pass.style.borderColor = "#dddddd";
        passErr.innerHTML = ""; 
    }
    //repass
    if(rePass.value != ""){
       rePass.style.borderColor = "#dddddd";
       rePassErr.innerHTML = ""; 
    }
}

//errremove
firstName.addEventListener('blur', errorRemove);
surName.addEventListener('blur', errorRemove);
userEmail.addEventListener('blur', errorRemove);
passErr.addEventListener('blur', errorRemove);
rePass.addEventListener('blur', errorRemove);


//modal
var trigger = document.getElementById('trigger');
var modal = document.getElementById('modal');
var closeModal = document.getElementById('closeModal');

trigger.addEventListener('click',function(){
    modal.style.display = "flex";
});

closeModal.addEventListener('click',function(){
    modal.style.display = "none";
});
