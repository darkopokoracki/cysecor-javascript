// https://62c20b7deff7f7856f190cec.mockapi.io/proba

// AjAx request na old school nacin - ne moramo da razumemo bas sve
// necemo ga koristiti svakako

/*
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
    }
}

xhttp.open('GET', 'https://62c20b7deff7f7856f190cec.mockapi.io/proba/students', true);
xhttp.send();
*/

// Na novi nacin - bolji i laksi nacin

let request = fetch('https://62c20b7deff7f7856f190cec.mockapi.io/proba/students') // vraca promise
.then(response => response.json() )
.then(data => {console.log(data )})
.catch(error => {
    alert('error');
});
