/*
    Password checkout
*/
const validatePasswordInput = event => {
    event.preventDefault();

    let passwordInput = document.querySelector('#password');
    let passwordLength = passwordInput.value.length;
    
    document.querySelector('.input-error').innerText = '';

    if (passwordLength >= 1 && passwordLength <= 20) {
        showPasswordStrength();
    } else {
        document.querySelector('.input-error').innerText = 'Lozinka mora da bude u opsegu od 1 do 20 karaktera';
    }
}

const showPasswordStrength = () => {
    let passwordInput = document.querySelector('#password');
    let passwordLength = passwordInput.value.length;

    pointer.innerText = 'Checking...';
    pointer.classList.add('pointer');
    pointer.style.transform = `translateX(${(passwordLength - 1) * 100}%)`;

    pointer.addEventListener('transitionend', event => {  
        if (event.propertyName == "transform") {
            pointer.innerText = '';
            pointer.style.border = '1px solid black';

            if (passwordLength <= 6) pointer.style.background = 'red';
            if (passwordLength > 6 && passwordLength < 14) pointer.style.background = 'orange';
            if (passwordLength > 14) pointer.style.background = 'green';

            let k = 0;
            let pauseExecution = setInterval( () => {

                pointer.remove();
                for (let i = 0; i < 20; i++) {
                    display.innerHTML += `<div class="level" id="level${i}"></div>`;
                }

                let coloredLevel = document.querySelector(`#level${passwordLength - 1}`);
                let messageLevel = document.querySelector('.message-level');

                if (passwordLength <= 6) {
                    coloredLevel.style.background = 'red';
                    messageLevel.style.color = 'red';
                    messageLevel.innerText = 'Password strength: Week!';
                    
                }
                if (passwordLength > 6 && passwordLength < 14) {
                    coloredLevel.style.background = 'orange';
                    messageLevel.style.color = 'orange';
                    messageLevel.innerText = 'Password strength: Medium!';
                }
                if (passwordLength > 14) {
                    coloredLevel.style.background = 'green';
                    messageLevel.style.color = 'green';
                    messageLevel.innerText = 'Password strength: Strong!';
                }

                k++;

                if (k === 1) {  
                    clearInterval(pauseExecution);
                }

            }, 1000);
        }
    });
}


let display = document.querySelector('.display');
let pointer = document.createElement('div');
display.appendChild(pointer);

let checkButton = document.querySelector('.check-password');
checkButton.addEventListener('click', validatePasswordInput);

/*
    Rotate profile image
*/

const rotateImage = event => {
    let deg = event.target.innerText.substring(0);
    let degValue = parseInt(deg);

    let imageToRotate = document.querySelector('.image-container img');
    imageToRotate.style.transform = `rotate(${degValue}deg)`;
}

let rotateButtons = document.querySelectorAll('.rotate-button');

rotateButtons.forEach( button => {
    button.addEventListener('click', rotateImage);
});


/*
    Show Box
*/

const showBox = () => {
    let box = document.querySelector('.box');
    
    let k = 0;
    let boxOpacity = 0;

    let boxInterval = setInterval( () => {
        
        boxOpacity += 0.2;
        box.style.opacity = boxOpacity;
        box.innerText = boxOpacity;

        k++;

        if (k === 5) {
            clearInterval(boxInterval);
        }

    }, 1000);
}

let showBoxButton = document.querySelector('.show-box-btn');
showBoxButton.addEventListener('click', showBox);

/*
    Refuel
*/

const refuel = () => {
    let liters = document.querySelector('#liters').value;
    liters = parseInt(liters);
    let tankLevel = document.querySelector('.tank-level');
    let fuelPicture = document.querySelector('#fuel-picture');
    fuelPicture.setAttribute('src', 'img/fuel2.jpg');

    let k = 0;

    let fuelInterval = setInterval( () => {
        k += 1;

        tankLevel.style.height = k + '%';

        if (k === liters) {
            clearInterval(fuelInterval);
            fuelPicture.setAttribute('src', 'img/fuel3.jpg');
        }
    }, 500);
}

let buyBtn = document.querySelector('.buy-btn');
buyBtn.addEventListener('click', refuel);