/*
    4. Nacin - pomocu klasa = najbolji nacin

    - klasa je kalup pomocu kojeg definisemo objekat
    - Objekat je instanca klase 
    - Kroz primere ce nam sve biti jasnije
*/

class Osoba {
    constructor(firstname, lastname, phone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
    }

    getNameAndPhone() {
        console.log(`${this.firstname} - ${this.phone}`);
    }
}

let osoba1 = new Osoba('Darko', 'Pokoracki', '0628224719');
let osoba2 = new Osoba('Mirko', 'Markovic', '0638224719');
osoba1.getNameAndPhone();
osoba2.getNameAndPhone();
