// Inicijalno stanje filma kada jos nema odgledanog filma
let cancelBtn = document.querySelector('.cancel-btn');
cancelBtn.setAttribute('disabled', 'true');
cancelBtn.style.color = '#8fb9ab';


let total = 0;

function watchMovie(e) {
    let mainElement = e.closest('.film');
    let price = mainElement.querySelector('.film-price').innerText;
    price = price.substring(1);
    price = parseInt(price);

    // Disablovanje buttona
    let ctaBtn = mainElement.querySelector('.cta-btn');
    ctaBtn.setAttribute('disabled', 'disabled');

    // Menjanje boje buttona
    ctaBtn.style.color = '#8fb9ab';
    ctaBtn.classList.remove('hov');

    // Menjanje teksta
    ctaBtn.innerText = 'Pogledano';

    total += price;

    // Upisivanje cene u racun
    let billValue = document.querySelector('.bill-value');
    billValue.innerText = `$${total}`;

    // Enablovanje cancel dugmeta
    cancelBtn.removeAttribute('disabled');
    cancelBtn.style.color = '#f4d096';
}

function cancelFilms(e) {
    let mainElements = document.querySelectorAll('.film');

    mainElements.forEach(function (mainElement) {
        let filmButton = mainElement.querySelector('.cta-btn');

        if (filmButton.style.color === 'rgb(143, 185, 171)') {
            filmButton.removeAttribute('disabled');
            filmButton.style.color = '#314d63';
            filmButton.classList.add('hov');
        }
    });

    // Stavljanje cene na nulu
    total = 0;
    document.querySelector('.bill-value').innerText = `$${total}`;

    cancelBtn.setAttribute('disabled', 'true');
    cancelBtn.style.color = '#8fb9ab';
}