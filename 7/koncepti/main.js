console.log("Javascript ucitan");

/*
    Ovde menjamo google logo da bude nas logo na www.google.com
    - inspektujemo google logo
    - nadjemo klasu koju ima i uzmemo je pomocu querySelektora

    -menjamo logo.src na 'images/cysecor_logo.png' ali nista se nije promenilo
    zato sto ga trazi na googlovom serveru a on nije na googlovom serveru nego na nasem
    racunaru, u nasem google chromu

    - zbog toga korisitmo chrome runtime ali pre toga moramo logo da ucinimo
    dostupnim nasoj ekstenziji. idemo do manifest.jsona i definisemo
    "web_accessible_resources"...

    - i sada ga moramo ucitati iz nase ekstenzije a ne sa googlovog servera
*/

let logo = document.querySelector('.lnXdpd');
// logo.src = 'images/cysecor_logo.png';  ne moze ovako..

logo.src = chrome.runtime.getURL('images/cysecor_logo.png');
logo.srcset = chrome.runtime.getURL('images/cysecor_logo.png');

