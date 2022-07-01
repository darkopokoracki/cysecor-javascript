// 1. Object literal
/*
    Problem kod object literal:
    Sta ako u ovom nasem imeniku dodamo jos jednu osobu? Morali bismo da za osobu2
    iskopiramo sve sto imamo u osoba1 samo sa izmenom podataka
    Ovo moze da se resi pomocu druge metode pisanja OOP a to je 2.object konstruktor
*/
const Osoba = {
    firstname: 'John',
    lastname: 'Doe',
    phone: '0627835541',

    getNameAndPhone: function () {
        console.log(`${this.firstname} - ${this.phone}`); // this se odnosi na objekat
    }
}

const Osoba2 = {
    firstname: 'Darko',
    lastname: 'Pokoracki',
    phone: '078826212',

    getNameAndPhone: function () {
        console.log(`${this.firstname} - ${this.phone}`); // this se odnosi na objekat
    }
}

Osoba.getNameAndPhone();
Osoba2.getNameAndPhone();


// 2. Object konstruktor
/*
    Sada kada hocemo da uradimo jos jednog coveka ne moramo da kopiramo
    citavog coveka1.. nego imamo konstruktor napravljen koji sam pravi objekat, 
    na osnovu zadatih parametara
*/
function Covek (firstname, lastname, phone) {
    this.first_name = firstname;
    this.last_name = lastname;
    this.phone = phone;

    this.getNameAndPhone = function () {
        console.log(`${this.first_name} - ${this.phone}`);
    }
}

let covek1 = new Covek('Milan', 'Ristic', '076232323');
let covek2 = new Covek('Ivan', 'Ilorobarski', '232381923');
covek1.getNameAndPhone();
covek2.getNameAndPhone();


// 3.  Object create metod
/*
    Ovde smo zapravo klonirali objekat Automobil dodelili ga objektu
    i onda smo promenili neke propertie.
    I ovo je jedan od nacina koji se meni bas ne svidja....
    Najbolji je pomocu klasa iako te klase nisu prave klase kao u drugim programskim jezicima
    zato sto se to u javascriptu u pozadini desava nesto skroz drugacije. Ali to
    sada nije toliko bitno
*/
const Automobil = {
    marka: 'Opel',
    getMarkaAndModel: function () {
        console.log(`${this.marka} - ${this.model}`);
    }
}

let auto2 = Object.create(Automobil);
auto2.model = 'Astra';
auto2.getMarkaAndModel();

let auto3 = Object.create(Automobil);
auto3.model = 'Corsa';
auto3.getMarkaAndModel();

