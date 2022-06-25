/* 
    Responsive menu
*/
const mobileMenu = () => {
    let meni = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if (btn.innerText === 'MENU') {
        meni.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        meni.style.display = 'none';
        btn.innerText = 'MENU';
    }
}

/*
    Galerija
*/
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

rightBtn.addEventListener('click', () => {
    displayNone(pictures);
    imgNum++;

    if (imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
});

leftBtn.addEventListener('click', () => {
    displayNone(pictures);
    imgNum--;

    if (imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = 'block';

});

const displayNone = (elements) => {
    elements.forEach((img) => {
        img.style.display = 'none';
    });
}

/*
    Portfolio sort
*/
const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');

    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    portfolioItems.forEach(item => {
        item.style.display = 'none';
    })

    if (category === 'sve') {
        portfolioItems.forEach(item => {
            item.style.display = 'block';
        })
    }

    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    });
}


/*
    Modal button - otvaramo modal
*/
const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

/*
    Modal button - zatvaramo modal
*/
const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}