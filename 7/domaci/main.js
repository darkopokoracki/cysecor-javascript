// Menjanje google logoa
let logo = document.querySelector('.lnXdpd');
if (logo) {
    logo.src = chrome.runtime.getURL("images/cysecor_logo.png");
    logo.srcset = chrome.runtime.getURL("images/cysecor_logo.png");
}


// Menjanje google logoa sa strane (domaci)
let sideLogo = document.querySelector('.Q3DXx #logo img');
if (sideLogo) {
    sideLogo.src = chrome.runtime.getURL("images/cysecor_logo.png");
    sideLogo.srcset = chrome.runtime.getURL("images/cysecor_logo.png");
}
