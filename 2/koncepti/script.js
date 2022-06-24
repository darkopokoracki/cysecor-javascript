/*
    kod onclick 'this' ce samo sebe da ubaci u funkciju!
    Koriscenje onlick i nije bas pozeljno da se koristi
*/

function pokreniMe(dugme) {
    let nazivDugmeta = dugme.innerText;

    let message = document.querySelector('#kliknuto-dugme');
    message.innerText = nazivDugmeta;
}


// Selektovanje elementata po dubini
    function testing() {
        // Selektovanje svih linkova
        let linkovi = document.querySelectorAll('.moj-link');
        console.log(linkovi);


        // Selektovanje drugog linka
        let drugiLink = document.querySelectorAll('section .moj-link');
        drugiLink[0].innerText = 'Ovo je drugi link';


        // Selektovanje treceg linka
        let treciLink = document.querySelectorAll('.glavni-div .inner-div span .moj-link');
        treciLink[0].innerText = 'Ovo je treci link';
    }


// Selektovanje susednih elemenata 
    function testing2() {
        // Na osnovu drugog linka selektujemo prvi i treci link tj. susedna linka
        let drugiRandomLink = document.querySelector('.drugi-random-link');

        // Na osnovu drugog selektujemo treci:
        console.log(drugiRandomLink.nextElementSibling);
        let treciRandomLink = drugiRandomLink.nextElementSibling;

        // Na osnovu drugog selektujemo prvi:
        console.log(drugiRandomLink.previousElementSibling);
        let prviRandomLink = drugiRandomLink.previousElementSibling;
    }


// Closest() - dobijamo roditelja elementa tacno po onome po cemu trazimo
    function testing3() {
        let mySpan = document.getElementById('my-span');
        let najbliziParentDiv = mySpan.closest('div');

        console.log(najbliziParentDiv);
    }


// Rad sa atributima
    function atributi() {
        // setuvanje atributa
        let atributiLink = document.querySelector('.atributi-container a');
        atributiLink.setAttribute('href', 'www.google.com');

        let atributiParagraf = document.querySelector('.atributi-container p');
        console.log(atributiParagraf);
        atributiParagraf.setAttribute('data-darko', 'DarkoPokoracki');


        // Uklanjanje atributa
        let atributih4 = document.querySelector('.atributi-container h4');
        atributih4.removeAttribute('data-poky');


        // Uzimanje atributa (get)
        let atributih5 = document.querySelector('.atributi-container h5');
        console.log(atributih5.getAttribute('data-naslov'));

    }


// Dodavanje HTML-a u prazan div
    function addHtml() {
        let htmlDiv = document.querySelector('.html-div-container');
        htmlDiv.innerHTML = '<h1>Dobro dosli na nas sajt <a href="www.google.com">Google link</a></h1>';
        /*
            Ovo nije bas najbolji nacin da se dodaje html,
            postoji bolji nacin a to je da dodajemo preko append child tako
            sto cemo napravti element prvo preko createElement
        */
    }
    

// Neka validacija emaila, da vidimo kako se manipulise stringovima...
    /*
        Svaki email mora da ima '@' i '.'
    */
    function validiraj() {
        let emailInput = document.querySelector("#email");
        let emailValue = emailInput.value;

        // Prvo cemo proveriti da li nas email ima '@' i '.'
        if (emailValue.includes('@') && emailValue.includes('.')) {
            /*
                Sledece sto moramo da provermio:
                - da li nesto postoji pre '@'
                - da li nesto postoji posle '@'
                - da li nesto postoji posle .
                 ---- znaci mora biti ovako: nesto@nesto.nesto
            */

            let pozicijaAt = emailValue.indexOf('@');
            let pozicijaTacka = emailValue.indexOf('.');
            let izmedjuAtTacka = emailValue.substring(pozicijaAt + 1, pozicijaTacka);

            if (izmedjuAtTacka.length > 0) {
                // Sada proveramo ispred @
                let preAt = emailValue.substring(0, pozicijaAt);
                if (preAt.length > 2) {
                
                    // Sada proveravamo posle tacke

                    let posleTacke = emailValue.substring(pozicijaTacka + 1, emailValue.length);

                    if (posleTacke.length > 1) {
                        console.log("Mail je validan");
                        ulogujSe();
                    } else {
                        console.log('Mail nije validan')
                    }
                } else {
                    console.log("Mail nije validan");
                }
            } else {
                console.log("Mail nije validan");
            }

           // console.log(emailValue.substring(0, 5));
        } else {
            console.log("mail nije validan");
        }
    }
    /*
    - substring ne uzima poslednju poziciju!
    - indexOf trazi na kojoj se poziciji nalazi odredjeni karakter!
    */