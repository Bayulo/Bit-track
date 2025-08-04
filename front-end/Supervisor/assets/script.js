loginValidation(){
    username = document.getElementById("name");
    password = document.getElementById("password");

    errors = [];
    if(password.length() < 7){
    errors.push("Password must be minimum 7 characters");
    }

    dispError = document.getElementById("dispError");
    dispError.textContent = errors;
}