// Ispis pomoću javascripta iz konzole
    console.log("Pozdrav iz konzole!")
    console.error("Ovo je prikaz greske!")
    console.warn("Ovo je upozorenje!")
    console.log(5 === 6)
        /*
            - console se odnosi samo na konzolu
        */


// Ispis na stranici
    document.write("Pozdrav sa stranice!")

        /* 
            - document se odnosi na html i stranicu. 
            - kada zelimo da upravljamo html kodom uvek pišemo dokument.
        */


// Ispis iz pop-upa
    window.alert("Pozdrav is popupa!")
        /*
        - window se odnosi na tabove, refresh, back... window metode mozemo pisati
            i bez window
        */


// selektovanje elementa i upis u njega
    document.getElementById("poruka").innerText = "Hello World"


// Definisanje variable(promenljive)
    let cysecor


// Dodeljivanje vrednosti promenljivoj
    cysecor = "Subscribe na moj kanal!"


// Inicijalizacija
    let pozdrav = "Dobrodosli na moju web stranicu!" // string
    let godine = 5 // integer
    let tacno = true // bool
    let netacno = false // bool
    let prosek = 5.1 // float


// Da proverimo kog tipa je promenljiva
    console.log(typeof(godine)) // ispisace integer


// Pretvaranje stringa u integer
    let neki_broj = '100'
    neki_broj = parseInt(neki_broj)


// algoritam zamene
    let first_number = 5
    let secound_number = 8
    let temp

    temp = first_number
    first_number = secound_number
    secound_number = temp
        /*
            Paralela u relanom životu bi bila da imamo 2 čase. U jednoj časi koka kola
            a u drogoj fanta. Hoćemo da kokakolu stavimo u času gde je fanta a fantu
            u času gde je koka kola. Treba će nam pomoćna časa!
        */


// Konstanta
    const number = 5
    // number = 8 ne sme da se menja!!


// Nadovezivanje stringova
    let firstname = 'Darko'
    let lastname = 'Pokoracki'
    let age = 21

    // 1. način
    console.log('Ja sam ' + firstname + ' ' + lastname + ' i imam ' + age + ' godina.')

    // 2. način
    console.log(`Ja sam ${firstname} ${lastname} i imam ${age} godina.`)


// Povecavanje i smanjivanje brojeva
    let random_number = 10

    random_number++
    random_number += 3

    random_number--
    random_number -= 4


// Logicki operatori
    console.log( (5 > 7) && (8 > 2) ) // false
    console.log( (5 > 7) || (8 > 2) ) // true


// Uslovi
    let x = 5
    let y = 9

    if (x > y) {
        console.log("Uraditi nesto")
    } else {
        console.log("Uraditi nesto drugo")
    }


// Switch
    let mesec = 6

    switch (mesec) {
        case 1:
            console.log("Januar")
            break
        
        case 2:
            console.log("Februar")
            break

        case 3:
            console.log("Mart")
            break

        case 4:
            console.log("April")
            break

        case 5:
            console.log("Maj")
            break

        case 6:
            console.log("Jun")
            break

        case 7:
            console.log("Jul")
            break

        case 8:
            console.log("August")
            break

        case 9:
            console.log("Septembar")
            break

        case 10:
            console.log("Oktobar")
            break

        case 11:
            console.log("Novembar")
            break

        case 12:
            console.log("Decembar")
            break
        
        default:
            console.log("Uneli ste pogresan mesec!")
            break
    }


// niz
    let brojevi = [7, 10, 12, -4, 12, 100, 10000, 43]
    let broj_elemenata = brojevi.length
    let brojevi7 = brojevi[0] // pristupanje indeksima niza


// while petlja
    let novcanice = [5, 10, 20, 50, 100, 200, 500, 1000]
    let brojac = 0
    let izbrojane_novacnice = 0

    while (brojac < novcanice.length) {
        izbrojane_novacnice += novcanice[brojac]

        brojac++
    }

    console.log(`Izbrojali smo: ${izbrojane_novacnice}`)


// for petlja (old school)
    let novcanice2 = [5, 10, 20, 50, 100, 200, 500, 1000]
    let izbrojane_novacnice2 = 0

    for (let brojac = 0; brojac < novcanice2.length; brojac++) {
        izbrojane_novacnice2 += novcanice[brojac]
    }

    console.log(`Izbrojali smo: ${izbrojane_novacnice2}`)


// for petlja (for of)
    let automobili = ['Opel', 'Mercedes', 'Audi', 'BMW', 'Porsche']
    
    for (let automobil of automobili) {
        console.log(automobil)
    }


// for petlja (for in)
    let songs = ['song1', 'song2', 'song3', 'song4']

    for (let song in songs) {
        console.log(song)
    }


// forEach
    let names = ['Darko', 'Filip', 'Marko']

    names.forEach(function (name) {
        console.log(name)
    })

/*
    Razlika izmedju for in i for of
    for (let song in songs)
        = song je indeks niza

    for (let song of songs)
        = song je element niza
*/


// Objekti (kao malo napredniji niz)
    let cene_automobila = {
        audi: 50000,
        porsche: 70000,
        opel: 23000
    }


// Funkcije
    let nekretnine = {
        kuca: '95000',
        plac: '19000',
        stan: '65000'
    }

    function racunanje_mesecne_rate(godina, tip_nekretnine) {
        let meseci = godina * 12
        let rata = (nekretnine[tip_nekretnine] / meseci).toFixed(2)

        console.log(`${tip_nekretnine} će se platiti ${godina} godina a rata će biti ${rata}eur mesečno`)
    }

    racunanje_mesecne_rate(10, 'kuca')
    racunanje_mesecne_rate(10, 'plac')
    racunanje_mesecne_rate(10, 'stan')


// Selektovanje
    let spanovi = document.getElementsByName('span') // selektovanje po tagu
    console.log(spanovi) // mozemo detaljno da prodjemo kroz petlju

    let divovi = document.getElementsByClassName('moj-div') // selektovanje po class name
    console.log(divovi)

    let paragraf = document.getElementById('para') // selektovanje po ID
    console.log(paragraf)

    let naslov = document.querySelector('#naslov') // Selektovanje univerzalnim selektorom
    console.log(naslov)


// Uklanjanje elementa sa DOM-a
    let element_za_uklanjanje = document.querySelector('.moj-paragraf')
    element_za_uklanjanje.remove() // Funkcija koja uklanja element sa DOM-a


// Kreiranje i dodavanje elementa u stranicu
    let container = document.querySelector('.container')

    let novi_paragraf = document.createElement('p')
    novi_paragraf.classList = 'klasa-paragrafa'
    novi_paragraf.innerText = 'Ovo je neki paragraf koji sam kreirao'

    container.appendChild(novi_paragraf)


