"use strict"
console.log(`login running ok`)

const usersArr = [];

function verifyUsername(usernameToVerify) {

    const regexUsername = /^[a-zA-Z0-9_-]{3,15}$/;
    let foundUsername = toFindUserByUsername(usernameToVerify);

    if (!regexUsername.test(usernameToVerify)) {
        alert(invalidDataMessage("username", "The username may only contain letters, numbers, underscores, and hyphens, with a length between 3 and 15 characters."))
        // return alert(`${invalidDataMessage("username")} Usernames must have minimum 3 and maximum 15
        // characters, also can include letters, numbers and dashes/underscores. `)
        return false
    }

    if (foundUsername) {
        alert(alreadyExistsMessage("username"));
        return false
    }

    return true
}

function verifyEmail(emailToVerify) {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let foundEmail = toFindUserByEmail(emailToVerify);

    if (!emailRegex.test(emailToVerify)) {
        alert(invalidDataMessage("email"));
        return false
    }

    if (foundEmail) {
        alert(alreadyExistsMessage("email"));
        return false
    }

    return true
}

function verifyPassword(passwordToVerify) {
    
    let passwordRegex = /^[A-Za-z\d]{5,15}$/;

    if (!passwordRegex.test(passwordToVerify)) {
        alert(couldNotVerifyData("password", "The password may only contain letters and numbers, with a length between 5 and 15 characters."))
        return false
    }

    return true;
}

function registerUser() {

    let usernameInput = document.getElementById("usernameInputReg").value;
    let emailInput = document.getElementById("emailInputReg").value;
    let passwordInput = document.getElementById("passwordInputReg").value;

    if (!usernameInput) { return showMessageReg(missingDataMessage("username"))};
    if (!emailInput) { return showMessageReg(missingDataMessage("email"))};
    if (!passwordInput) { return showMessageReg(missingDataMessage("password"))};

    let usernameNormalized = normalizeString(usernameInput);
    let validUsername = verifyUsername(usernameNormalized);
    let emailNormalized = normalizeString(emailInput)
    let validEmail = verifyEmail(emailNormalized);
    let validPassword = verifyPassword(passwordInput);

    if (validUsername && validEmail && validPassword) {
        const newUser = new User (usernameInput, emailInput, passwordInput);
        usersArr.push(newUser);
        showMessageReg(`${successMessage("Nice!", "Registration")}<br>Save your ID number, you will use it!<br>${newUser.toString()}`)
    } else {
        showMessageReg(errorMessage);
    }

}

function loginUser() {

    let usernameInput = document.getElementById("usernameInputLogin").value;
    let passwordInput = document.getElementById("passwordInputLogin").value;
    let usernameNormalized = normalizeString(usernameInput);
    let foundUser = toFindUserByUsername(usernameNormalized);



    if (!usernameInput) { return showMessageLogin(missingDataMessage("username"))};
    if (!passwordInput) { return showMessageLogin(missingDataMessage("password"))};

    if (!foundUser) {
        return showMessageLogin(couldNotVerifyData("user", "It does not exist in our database."));

    } else {
        if (foundUser.password === passwordInput) {
            // entrar como usuario
            showMessageLogin(successMessage("Hello again!", "Login"));

        } else {
            showMessageLogin(couldNotVerifyData("password or username", "Please, submit the right data"));
        }
    }
}

// find your pawMate
// /^[a-zA-Z0-9_-]{3,15}$/ ->
// Esta regex permite nombres de usuario que:
// 	•	Empiecen y terminen con letras o números.
// 	•	Incluyan guiones y guiones bajos.
// 	•	Tengan entre 3 y 15 caracteres.

// /[a-zA-Z0-9._-]/ ->
// Esta regex permite emails que:
// 	•	Solo permite letras, números, punto (.), guion bajo (_) y guion (-)
// en la parte local del email (antes del @).