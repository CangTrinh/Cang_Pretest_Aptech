
//checkPass function
function checkPass() {
    var form = document.getElementById("form_dang_ky");
    var password1 = form.password.value;
    var password2 = form.passConfirm.value;
    if (password1 === password2) {
        alert("Welcome to Education Web");
    }
    else {
        alert("\nPassword did not match: Please try again...");
    }
    return false;
}

document.getElementById("form_dang_ky").onsubmit = function(){
    checkPass();
    return false;
}
