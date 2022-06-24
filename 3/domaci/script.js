// Click event
const izracunaj = () => {
    let firstNumber = document.querySelector('#first-number').innerText;
    let secondNumber = document.querySelector('#second-number').innerText;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    let resultSpan = document.querySelector('#result');
    resultSpan.innerText = firstNumber + secondNumber;

    izracunajBtn.remove();
}

let izracunajBtn = document.querySelector('.izracunaj-btn');
izracunajBtn.addEventListener('click', izracunaj);


// mousemove event
const changeBoxColor = () => {
    let radnomColorRed = Math.floor(Math.random() * 256);
    let randomColorGreen = Math.floor(Math.random() * 256);
    let randomColorBlue = Math.floor(Math.random() * 256);

    box.style.background = `rgb(${radnomColorRed}, ${randomColorGreen}, ${randomColorBlue})`;
}

let box = document.querySelector('.box');
box.addEventListener('mousemove', changeBoxColor);


// resize event
const showWindowWidth = () => {
    let windowWidthResult = document.querySelector('#window-width');
    windowWidthResult.innerText = `${window.innerWidth}px`;
}

window.addEventListener('resize', showWindowWidth);


// submit event
const registerNewUser = (event) => {
    event.preventDefault();

    // Validacija
    let firstNameInput = document.querySelector('#firstname').value;
    let lastNameInput = document.querySelector('#lastname').value;
    let emailInput = document.querySelector('#email').value;
    let passwordInput = document.querySelector('#password').value;

    let firstNameError = document.querySelector('.firstname-error');
    let lastNameError = document.querySelector('.lastname-error');
    let emailError = document.querySelector('.email-error');
    let passwordError = document.querySelector('.password-error');

    let firstNameSuccess = document.querySelector('.firstname-success');
    let lastNameSuccess = document.querySelector('.lastname-success');
    let emailSuccess = document.querySelector('.email-success');
    let passwordSuccess = document.querySelector('.password-success');

    // validacija za firstname
    if (firstNameInput.length > 2) {
        if (firstNameError.innerText.length > 0) {
            firstNameError.innerText = '';
        }

        firstNameSuccess.innerText = 'Validno ime!';
        firstNameSuccess.style.color = 'green';
    } else {
        if (firstNameSuccess.innerText.length > 0) {
            firstNameSuccess.innerText = '';
        }

        firstNameError.innerText = 'Ime nije validno!';
        firstNameError.style.color = 'red';
    }

    // validacija za lastname
    if (lastNameInput.length > 2) {
        if (lastNameError.innerText.length > 0) {
            lastNameError.innerText = '';
        }

        lastNameSuccess.innerText = 'Validno prezime!';
        lastNameSuccess.style.color = 'green';
    } else {
        if (lastNameSuccess.innerText.length > 0) {
            lastNameSuccess.innerText = '';
        }

        lastNameError.innerText = 'Prezime nije validno!';
        lastNameError.style.color = 'red';
    }

    // Validacija za email
    let pozicijaAt = emailInput.indexOf('@');
    let pozicijaTacka = emailInput.indexOf('.');

    if (emailInput.substring(0, pozicijaAt).length > 2) {
        if (emailInput.substring(pozicijaAt + 1, pozicijaTacka).length > 2) {
            if (emailInput.substring(pozicijaTacka + 1, emailInput.length + 1).length > 2) {
                if (emailError.innerText.length > 0) {
                    emailError.innerText = '';
                }

                emailSuccess.innerText = 'Validan Emial!';
                emailSuccess.style.color = 'green';
            } else {

                if (emailSuccess.innerText.length > 0) {
                    emailSuccess.innerText = '';
                }

                emailError.innerText = 'Email nije validan! Posle tacke mora da postoje najmanje 2 karaktera!';
                emailError.style.color = 'red';
            }
        } else {

            if (emailSuccess.innerText.length > 0) {
                emailSuccess.innerText = '';
            }

            emailError.innerText = 'Email nije validan! izmedju @ i . mora da ima najmanje 2 karaktera!';
            emailError.style.color = 'red';
        }
    } else {
        if (emailSuccess.innerText.length > 0) {
            emailSuccess.innerText = '';
        }

        emailError.innerText = 'Email nije validan! Ispred @ mora da ima najmanje 2 karaktera!';
        emailError.style.color = 'red';
    }

    // Validacija za password
    if (passwordInput.length > 5) {
        if (passwordError.innerText.length > 0) {
            passwordError.innerText = '';
        }

        passwordSuccess.innerText = 'Validna lozinka!';
        passwordSuccess.style.color = 'green';
    } else {
        if (passwordSuccess.innerText.length > 0) {
            passwordSuccess.innerText = '';
        }

        passwordError.innerText = 'Lozinka nije validna, mora da ima najmanje 5 karaktera!';
        passwordError.style.color = 'red';
    }

}

let registerForm = document.querySelector('form');
registerForm.addEventListener('submit', registerNewUser);


// change event
let automobiliSelect = document.querySelector('#automobili');

automobiliSelect.addEventListener('change', () => {
    let automobilSpan = document.querySelector('#automobil-span');
    automobilSpan.innerText = automobiliSelect.value;
});


// keydown event
const showCurrentLetter = e => letterContainer.innerText = e.key; // arrow funkcija u jednoj liniji!

let letterContainer = document.querySelector('.letter-container');
window.addEventListener('keydown', showCurrentLetter);


// copy event
const copyText = () => alert('Cestitamo, upravo ste kopirali tekst!!!');

let copyParagraph = document.querySelector('.copy-paragraph');
copyParagraph.addEventListener('copy', copyText);


// cut event
const cutText = () => alert('Cestitamo, upravo ste cutovali tekst!!!');

let cutParagraph = document.querySelector('.cut-paragraph');
cutParagraph.addEventListener('cut', cutText);


// paste event
const changeTextareaBackground = () => {
    textarea.classList.add('beautiful-textarea');
}

let textarea = document.querySelector('#moja-textarea');
textarea.addEventListener('paste', changeTextareaBackground);
