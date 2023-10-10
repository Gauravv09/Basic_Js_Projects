function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var password = document.Form.password.value;
    var confirmPassword = document.Form.confirmPassword.value;
    var city = document.Form.city.value;

    var nameErr = emailErr = mobileErr = genderErr = passwordErr = confirmPasswordErr = cityErr = true;

    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(name)) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
        if (!regex.test(email)) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (!regex.test(mobile)) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if (!gender) {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    if (password == "") {
        printError("passwordErr", "Please enter a password");
    } else {
        if (password.length < 6) {
            printError("passwordErr", "Password must be at least 6 characters long");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    if (confirmPassword == "") {
        printError("confirmPasswordErr", "Please confirm your password");
    } else {
        if (confirmPassword !== password) {
            printError("confirmPasswordErr", "Passwords do not match");
        } else {
            printError("confirmPasswordErr", "");
            confirmPasswordErr = false;
        }
    }

    if (city == "Select") {
        printError("cityErr", "Please select your city");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }

    if (
        nameErr ||
        emailErr ||
        mobileErr ||
        genderErr ||
        passwordErr ||
        confirmPasswordErr ||
        cityErr
    ) {
        return false;
    }
}
