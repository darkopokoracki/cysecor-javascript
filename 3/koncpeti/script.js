// Tradicionalni način pisanja funkcije
    function zbir() {
        let a = 5;
        let b = 10;

        console.log(a + b);
    }

    zbir();
    /*
        Ovako su se pre pisale funkcije ali danas postoji bolji način!
    */


// Novi način pisanja funkcije
    // kod arrow koristimo const, pravilnije je.. nekad k=const koristimo i kod selektovanja
    const izracunaj = () => {
        let a = 7;
        let b = 5;

        console.log(7 - 5);
    }

    izracunaj();


// Funkcija sa argumentima na tradicionalni nacin
    function oduzmi(a, b) {
        console.log(a - b);
    }

    oduzmi(100, 50); // 50


// Arrow funkcija sa argumentima
    const oduzmi_me = (a, b) => {
        console.log(a - b);
    }

    oduzmi_me(80, 50);


// Skracena verzija arrow funkcije
    // 1. Ako imamo samo jedan argument
    const skracena_verzija1 = a => {
        let b = 100;
        console.log(a + b);
    }

    skracena_verzija1(100);

    // 2. Ako imamo samo jednu liniju koda u bloku funkcije
    const skracena_verzija2 = a => console.log(a + 100);

    skracena_verzija2(100);


// JavaScript Eventi (click, scroll, hover, submit, change, resize...)
// To su dogadjaji koji se desavaju na stranici od strane korisnika

/*
    this preko onclicka nije isto kao i informacije o eventu!!
*/


// Dodeljivanje event listenera
    let btns = document.querySelectorAll('.moj-btn');

    btns.forEach(function (btn) {
        btn.addEventListener("click", function(event) {
            let clicked_btn = event.target;

            console.log(clicked_btn);
        });
    });



// Sprecavanje podrazumevanog ponasanja
    let link = document.querySelector('#link');

    link.addEventListener("click", (event) => {
        event.preventDefault();

        console.log(event.target);
    });


// Sprecavanje submitovanje forme
    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        console.log("test");
    });


// Koriscenje change eventa

    let opcije = document.querySelector('#select');

    opcije.addEventListener('change', (event) => {
        console.log(event.target.value);
    });


// Resize event
    window.addEventListener('resize', (event) => {
        if (window.innerWidth > 1000) {
            console.log("Prozor veci od 1000");
        } else {
            console.log("prozor manji od 1000");
        }
    });


// keydown event
    let input = document.querySelector('input');

    input.addEventListener('keydown', (event) => {
        console.log(event.key);

        if (event.key === 'Delete') {
            alert('Obrisao si nesto');
        }
    });


// Dogadjaj pomeranje misa
    window.addEventListener('mousemove', (event) => {
        console.log("mis pomeren");
    });