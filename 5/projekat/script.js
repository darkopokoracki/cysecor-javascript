let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent; // ili innerText

let splittedText = text.split('');

textTag.innerHTML = ''; // Prvo ispraznimo

for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] == ' ') {
        splittedText[i] = "&nbsp;";
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}


let k = 0;
let interval = setInterval( () => {
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[k];

    singleSpan.className = 'fadeMove';
    k++;

    if (k === spans.length) {
        clearInterval(interval);
    }
}, 70);




let border = document.querySelector('.border-line');
let animationWidth = 0;

window.onscroll = () => {

    // Detektujemo da li idemo gore ili dole sa skrolom...
    // Ako je stari skrol veci od trenutnog skrola to znaci da idemo ka gore
    if (this.oldScroll > this.scrollY) {
        animationWidth -= 1;
    } else {
        animationWidth += 1;
    }

    if (animationWidth >= 100) {
        animationWidth = 100;
    }

    if (animationWidth <= 0) {
        animationWidth = 0;
    }

    // this se odnosi na window
    border.style.width = animationWidth + '%';

    this.oldScroll = this.scrollY;

    imageAnimation();

}

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;


    let leftImg = document.querySelector('.slideFromLeft');
    let rightImg = document.querySelector('.slideFromRight');

    if (sectionPosition < screenPosition) {
        leftImg.classList.add('animated');
        rightImg.classList.add('animated');
    }
}



