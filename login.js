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

// añadir delay para simular llamada al servidor
function loginUser() {

    loginAttempt();
}


function delay(num) {
    // num * 1000 no lo estoy almacenando en ningun sitio,
    // solo vive ahi, cuando salimos son segundos
    return new Promise( resolve => setTimeout (resolve, num * 1000));
}

async function serverConnectionSimulator() {

        return new Promise (async (resolve, reject) => {
            // math random * 10 * 1.000 -> * 10.000 (msg)
            let randomTime = 2 // Math.random() * 10;
            await delay(randomTime);

            if (randomTime >= 5) {
                // hemos esperado demasiado, el servidor no conecta
                // aqui gestionamos el error
                reject(notFoundMessage("server"));
            } else {
                resolve();
            }
        })
}


async function asyncUserValidationSim(foundUser, passwordInput) {
    
    return new Promise (async (resolve, reject) => {
        let randomTime = Math.random() * 10;
        await delay(randomTime);

        console.log(`founduser -> ${foundUser} y la passw -> ${foundUser.password} y el input -> ${passwordInput}`)

        if (!foundUser) {
            return reject(showMessageLogin(couldNotVerifyData("user", "It does not exist in our database.")));
        }

        if (foundUser.password === passwordInput) {
            // entrar como usuario
            return resolve(showMessageLogin(successMessage("Hello again!", "Login")));

        } else {
            return reject(showMessageLogin(couldNotVerifyData("password or username", "Please, submit the right data")));
        }
    })
}

async function loginAttempt() {

        // error:
        // que no se encuentre el usuario
        // que no se la password correcta
        // que el servidor no responda

        cleanDivGeneric("resultDivLogin");

    try {
        await serverConnectionSimulator();

        let usernameInput = document.getElementById("usernameInputLogin").value;
        let passwordInput = document.getElementById("passwordInputLogin").value;
        let usernameNormalized = normalizeString(usernameInput);
        let foundUser = toFindUserByUsername(usernameNormalized);
    
        if (!usernameInput) { return showMessageLogin(missingDataMessage("username"))};
        if (!passwordInput) { return showMessageLogin(missingDataMessage("password"))};

        try {
            await asyncUserValidationSim(foundUser, passwordInput);

        } catch (error) {
            console.log(error);
            showMessageLogin(error);
        }

    } catch (error) {
        alert(error);
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