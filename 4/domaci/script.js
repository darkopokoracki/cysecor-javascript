/*
    Prvi deo uradjen
*/
const toggleMenu = () => {
    let ul = document.querySelector('.header ul');
    console.log(toggleBtn.innerText);

    if (toggleBtn.innerText === 'MENU') {
        ul.style.display = 'block';
        toggleBtn.innerText = 'CLOSE';
    } else {
        ul.style.display = 'none';
        toggleBtn.innerText = 'MENU';
    }
}

let toggleBtn = document.querySelector('.mobile-menu-btn');
toggleBtn.addEventListener('click', toggleMenu);

/*
    Drugi deo
*/
const moveImgLeft = () => {
    displayNoneAll(pictures);

    imgNum--;

    if (imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    
    pictures[imgNum].style.display = 'block';
}

const moveImgRight = () => {
    displayNoneAll(pictures);

    imgNum++;

    if (imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}

const displayNoneAll = (images) => {
    images.forEach( img => {
        img.style.display = 'none';
    });
}

let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;

let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
leftBtn.addEventListener('click', moveImgLeft);
rightBtn.addEventListener('click', moveImgRight);

/* 
    Treci deo
    Pre rada sa javascriptom cemo dodati jos 2 kategorije i 5 itema...
    +kategorije: Fakulteti i prakse
*/
const portfolioSort = event => {
    let category = event.target.getAttribute('data-category'); // Uzimamo kategoriju
    console.log(category);
    let categoryItems = document.querySelectorAll('.portfolio-single-item');

    // Prvo stavljamo sve na display none:
    categoryItems.forEach( item => {
        item.style.display = 'none';
    });

    // Ako korisnik odabere kategoriju 'SVE':
    if (category === 'sve') {
        categoryItems.forEach( item => {
            item.style.display = 'block';
        });
    }

    // Ako korisnik odabere posebnu kategoriju
    categoryItems.forEach( item => {
        if (item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    });
}

let btns = document.querySelectorAll('.portfolio-categories button');

btns.forEach( btn => {
    btn.addEventListener('click', portfolioSort);
});

/*
    Cetvrti deo
    Pre rada sa javascriptom, dodacemo novi button koji ce biti cezan za novi modal
 */

const openModal = event => {
    let dataModal = event.target.getAttribute('data-modal');

    modals.forEach( modal => {
        if (modal.getAttribute('data-modal') === dataModal) {
            modal.style.display = 'block';
            overlay.style.display = 'block';

            // Pravimo listener za close modal samo unutar otvorenog modala!
            let closeModalButton = modal.querySelector('.closeModal');
            closeModalButton.addEventListener('click', closeModal);
        }
    }); 
}

const closeModal = event => {
    let modalToClose = event.target.closest('.popup-modal'); // trazi parenta!
    modalToClose.style.display = 'none';
    overlay.style.display = 'none';
}

let modalButtons = document.querySelectorAll('.modal-section button');
let modals = document.querySelectorAll('.popup-modal');
let overlay = document.querySelector('.overlay');

modalButtons.forEach( button => {
    button.addEventListener('click', openModal);
});

