let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let strength = document.getElementById("strength");
let passbox = document.getElementById("passbox");
let passbox1 = document.getElementById("passbox1");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");
let clearbtn = document.getElementById("clearbtn");

clearbtn.addEventListener('click', () => document.querySelector('.passbox').value = "");
clearbtn.addEventListener('click', () => document.querySelector('.passbox1').value = "");

// Function to check if the password contains lowercase characters
function containsLowerCase(str) {
    return str.toLowerCase() !== str;
}
// Function to check if the password contains uppercase characters
function containsUpperCase(str) {
    return str.toUpperCase() !== str;
}
// Function to check if the password contains numbers
function containsNumbers(str) {
    return /\d/.test(str);
}
// Function to check if the password contains symbols
function containsSymbols(str) {
    return str.search(/[_!@#$%^&*=+~.:]/) !== -1;
}
// showing input slider value
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    slidervalue.textContent = inputslider.value;
})
// Function to update password strength in HTML
function updateStrength(password) {
    let strengthText = "Weak";
    let strengthColor = "red";

    if (password.length >= 12 && containsLowerCase(password) && containsUpperCase(password) && containsNumbers(password) && containsSymbols(password) && lowercase.checked && uppercase.checked && numbers.checked && symbols.checked) {
        strengthText = "Strong";
        strengthColor = "green";
    }
    else if (password.length >= 8 && (containsLowerCase(password) || containsUpperCase(password) && (containsNumbers(password) || containsSymbols(password)) && lowercase.checked && uppercase.checked && (numbers.checked || symbols.checked))) {
        strengthText = "Medium";
        strengthColor = "orange";
    }
    strength.textContent = `${strengthText}`;
    strength.style.color = strengthColor;
}
//Function to generate Password
genbtn.addEventListener('click', () => {
    if (!(lowercase.checked || uppercase.checked || numbers.checked || symbols.checked)) {
        alert("Please Check the Boxes!!")
    } else {
        // passbox.value=generatePassword();
        let generatedPassword = generatePassword();
        passbox.value = generatedPassword;
        updateStrength(generatedPassword);
    }
})

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let digits = "0123456789";
let allsymbols = "_!@#$%^&*=+~.:";

function generatePassword() {
    let password = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += numbers.checked ? digits : "";
    allchars += symbols.checked ? allsymbols : "";
    if (allchars == "" || allchars.length == 0) {
        return password;
    }
    let i = 1;
    while (i <= inputslider.value) {
        password += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }

    return password;
}

copyicon.addEventListener('click', () => {
    if (passbox.value != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText = "check";
        copyicon.title = "Password Copied";

        setTimeout(() => {
            copyicon.innerHTML = "content_copy";
        }, 3000)
    }
})


