/*
    Objekti
*/
const car = {
    "type": "Opel",
    "model": "Astra",
    "color": "Black"
};

const person = {
    "firstname": "Darko",
    "lastname": "Pokoracki",
    "age": 20
};

console.log(`Moje ime je ${person.firstname} ${person.lastname} i vozim ${car.type}`); // Prvi nacin pristupa
console.log(car['type'], car['model']); // Drugi nacin pristupa
console.log(this);

for (const property in car) {
    console.log(property); // type, model, color
    console.log(car[property]); // Opel, Astra, Black
}

console.log(typeof(car));

/*
    petlje
*/
// for loop old school
for (let i = 0; i < 10; i++) {
    console.log('Darko Pokoracki'); // Ispisuje 10 puta 'Darko Pokoracki'
}

// While petlja
let k = 5;

while (k > 0) {
    console.log('K je vece od nule');
    k--;
}

if (k === 0) {
    console.log('K vise nije vece od nule')
}

// Do while
let m = 8;

do {
    console.log('Hello world'); // Ispisuje sigurno jednom
} while (m > 20);

// For in loop
for (const property in person) {
    console.log(property); // type, model, color
    console.log(person[property]); // Opel, Astra, Black
}

/*
    Event listeneri
*/
let testButton = document.querySelector('.test');

// Prvi nacin handlovanja
// testButton.addEventListener('click', event => {
//     console.log(event);
//     console.log('do something...');
// });


// Drugi nacin handlovanja
// const testing = event => {
//     console.log(event);
//     console.log('Do something...');
// }

// let testButton2 = document.querySelector('.test2');
// testButton2.addEventListener('click', testing);


/*
    Ulovi
*/

// if, esle if, else
let vreme = 10; // 10 ujutro
if (vreme <= 10) {
    console.log('Dobro jutro!');
} else if (vreme > 10 && vreme < 18) {
    console.log('Dobar dan');
} else {
    console.log('Dobro vece!');
}

let dan = 5;
switch (dan) {
    case 1:
        console.log('Ponedeljak');
        break;
    case 2:
        console.log('Utorka');
        break;
    case 3:
        console.log('Sreda');
        break;
    case 4:
        console.log('Cetvrtak');
        break;
    case 5:
        console.log('Petak');
        break;
    case 6:
        console.log('Subota');
        break
    case 7:
        console.log('Nedelja');
        break;
    default:
        console.log('Da ne postoji!');
        break;
}

/*
    Regex - Kako funkcionise
    Pomocu regexa dajemo skup pravila pomocu kojeg pretrazujemo neki pattern.
    Moze biti korisno za trazenje ili za zamenu (rerplace)

    Sintaksa: /pattern/modifiers;
    Primer: /darko/i;

    - /darko/i = je regularni izraz
    - darko = je patern (obrazac) koji ce se koristiti u pretrazi
    - i = modifikator koji omogucava da pretrazivanje bude case insensitive.. da ne bude
    osetljivo na velika i mala slova

    cesto se koriste metode search() i replace()
*/

let text = 'zdravo, ja sam Darko Pokoracki';
let n = text.search("Darko");

console.log(n); // Daje pocetnu poziciju sa koje pocinje trazena rec - 15

// Za sve ostle stvari koje nam trebaju postoji cela dokumentacija... za email itd..


/*
    Analizirati jos jednom kod

    Postupak resavanja:
    - 1. Uzimamo sve inpute i stavljamo 'change' event listener za svaki input
        koji poziva funkciju koja proverava input npr: validateForm =>
    - 2. Pravimo jedan objekat koji ce sadrzati greske za svaki input.
        name svakog inputa ce bita naziv kljuca a vrednost svakog inputa ce na pocetku
        biti prazan niz
    - 3. U funkciji 'validateForm' treba nam vrednost inputa i name inputa.. pravimo
        te promenljive
    - 4. U istoj funkciji krecemo sa validacijom.. prvo proveravamo ono sto je zajednicko za 
        sve inpute a to je da svaki input mora da ima najmanje 5 karaktera...
        Ako ne neki uslov nije ispunjen upisujemo u objekat sa greskama pomocu errors[inputName]-
        inputName nam u ovom slucaju pomaze da identifukujemo koji input ima gresku i gde to 
        treba upisati.
    - 5. Dalje proveravamo pomocu switch naredbe
    - 6. Osmisljavanje funkcijei logike koja ce da ispise greske ukoliko postoje u objektu za greske
    Moja logika:
        ispod svakog inputa cu napraviti span koji ce biti namenjen za ispis greske
        ako posotji greska ona ce se ispisati
*/
console.log('-------------------------------------------');

const validateForm = event => {
    let inputValue = event.target.value;
    let inputName = event.target.getAttribute('name');

    if (inputValue.length > 5) {
        errors[inputName] = [];

        // Nastavljamo dalje - jos samo email i ponovljena lozinka

        switch (inputName) {
            case 'email':
                if (!validateEmail(inputValue)) {
                    errors[inputName].push('Email nije validan');
                }

                break;

            case 'confirm':
                let lozinka = document.querySelector(`input[name="password"]`);

                if (inputValue !== lozinka.value) {
                    errors[inputName].push('Lozinke se ne poklapaju!');
                }

                break;
        }

    } else {
        errors[inputName].push('Polje mora da sadrzi minimum 5 karaktera');
    }

    showErrors(errors);
}

const validateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }

    return false;
}

const showErrors = errors => {
    for (let p of document.querySelectorAll('p')) {
        p.innerText = '';
    }

    for (let property in errors) {
        let p = document.createElement('p');
        p.classList.add('error');
        p.innerText = errors[property];
        p.style.color = 'red';

        let parentElement = document.querySelector(`input[name="${property}"]`).parentElement;
        parentElement.appendChild(p);
    }
}


let inputs = document.querySelectorAll('input');

inputs.forEach( input => {
    input.addEventListener('change', validateForm);
});

let errors = {
    "firstname": [],
    "lastname": [],
    "username": [],
    "email": [],
    "password": [],
    "confirm": []
};