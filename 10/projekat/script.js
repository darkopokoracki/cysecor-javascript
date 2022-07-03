const findUser = event => {
    event.preventDefault();

    let id = document.querySelector('#id').value;
    
    let request = fetch(`https://62c20b7deff7f7856f190cec.mockapi.io/proba/students/${id}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.data').innerHTML = `<h1>${data.name}</h1>`;
    })
    .catch(error => alert('Greska pri ucitavanju: ', error));
}

let searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', findUser);