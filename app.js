
const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const passWord = document.querySelector('#password');
const cfPassword = document.querySelector('#cpassword');


// add Event

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validSnf()
})

// Email check Function

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

// Define the validate function

const validSnf = () =>{
    const userNameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passWordVal = password.value.trim();
    const cfPasswordVal = cpassword.value.trim();

    // validate user name

    if (userNameVal === '') {
        setErrorMsg(userNameVal, 'username cannot be blank');
    }else if (userNameVal.length <= 2) {
        setErrorMsg(userNameVal, 'username min 3 char');
    }else{
        setSuccessMsg(userNameVal);
    }

     // validate Email id

     if (emailVal === '') {
        setErrorMsg(emailVal, 'email cannot be blank');
    }else if (!isEmail(emailVal)) {
        setErrorMsg(emailVal, 'Not a valid Email');
    }else{
        setSuccessMsg(email);
    }
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
