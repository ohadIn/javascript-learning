function checkSignupForm() {
    const newpassword = document.getElementById("u_newpassword").value;
    const u_retypedpassword = document.getElementById("u_retypedpassword").value;
    if (IsEmailValid() && IsPasswordValid(newpassword) && newpassword == u_retypedpassword && IsFullnameValid())
        return true;
    return false;
}

function checkLoginForm() {
    const newpassword = document.getElementById("user-password").value;
    if (IsEmailValid() && IsPasswordValid(newpassword) && newpassword == password)
        return true;
    return false;
}

function IsEmailValid() {
    const email_val = document.getElementById("u_email").value;
    const iOfATChar = email_val.indexOf('@');
    const iOfDot = email_val.lastIndexOf('.');
    if (iOfATChar > 3 && iOfDot > iOfATChar + 2 && iOfDot < email_val.length - 1)
        return true;
    alert("email not valid");
    return false;
}

function IsPasswordValid(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=(?:.*\d){2})(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,50}$/;
    alert("password not valid: " + password);
    return regex.test(password);
}


function IsFullnameValid() {
    const fullname = document.getElementById("u_fullname").value;
    const justname = fullname.replaceAll(' ', ''); // Without spaces
    if (justname.length > 6 && justname.length < 30 && fullname.indexOf(' ') != -1 && /^[A-Za-z]+$/.test(justname))
        return true;
    alert("fullname not valid");
    return false;
}

