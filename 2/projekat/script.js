let allTotal = 0;

function addToCart(e) {
    let mainEl = e.closest('.single-item'); // ovo radimo da bismo imali pruistup svim elementima unutar ovog
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;

    let cartItems = document.querySelector('.cart-items');

    if (parseInt(quantity) > 0) {

        price = price.substring(1);
        price = parseInt(price);
        quantity = parseInt(quantity);

        let total = price * quantity;
        allTotal += total;

        cartItems.innerHTML += `
                            <div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                            </div>
        `;

        document.querySelector('.total').innerText = `Total: $${allTotal}`

        e.innerText = 'Dodato';
        e.setAttribute('disabled', 'true');
    } else {
        alert('Odaberi kolicinu!');
    }

    console.log(price);
    console.log(name);
    console.log(quantity);
}

function removeFromCart(e) {
    let mainEl = e.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    price = parseInt(price);
    allTotal -= price;

    document.querySelector('.total').innerText = `Total: $${allTotal}`;

    mainEl.remove()

    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').innerText;

        if (itemName === name) {
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Dodaj';
        }
    });
}


/*
koji sam ja problem imao bez closest
*/

/*
Analizirati js vs vue.js kod uklanjanja iz korpe
kod cistog js moramo i da upisemo ponovo
*/