// Da bi kolacici funkcionisali, moramo da napravimo neku vrstu domena!
// Pokrenucemo malu python skriptu!

// python -m http.server

document.querySelector('.set-cookies').addEventListener('click', e => {
    e.preventDefault();

    console.log('Cookie...');

    document.cookie = "name=Darko"; 
    document.cookie = "profesija=programer";
    document.cookie = "login=1";
    
    const date = new Date();
    
    let today = date.getTime( );
    let expires = 2 * 24* 60 * 60 * 1000; // pretvaramo u miliseknde
    
    date.setTime(today + expires);

    let new_date = date.toUTCString();

    document.cookie = `login=1; expires=${new_date}`;

    console.log(document.cookie);
});

/*
    Ovaj kolacic za login je koristan kada se neko uloguje na nas sajt i mozemo da stavimo
    da mu kolacic istekne za dva dana tj. da se mora ponovo prijaviti za dva dana.
*/


