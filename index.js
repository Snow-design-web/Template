let navbarIcon = document.querySelector('.navbar');
let navbarIcon_S = document.querySelector('.navbar-s');
let navbarLinks = document.querySelector('.navbar-links');
let cartIcon = document.querySelector('.cart');
let cartIcon_S = document.querySelector('.cart-s');
let cartContainer = document.querySelector('.medium-container');
let header = document.querySelector('header');
let sectionHeader = document.querySelector('section');


navbarIcon.onclick = () => {
    navbarLinks.classList.toggle('active');
}
navbarIcon_S.onclick = () => {
    navbarLinks.classList.toggle('active');
}


cartIcon.onclick = () => {
    cartContainer.classList.toggle('active');
}

cartIcon_S.onclick = () => {
    cartContainer.classList.toggle('active');
}

window.onscroll = () => {
    navbarLinks.classList.remove('active');
    cartContainer.classList.remove('active');

    if (window.scrollY > 50) {
        header.style.display = "none";
    } else {
        header.style.display = "flex";
    }

    if (window.scrollY > 50) {
        sectionHeader.style.display = "flex";
    } else {
        sectionHeader.style.display = "none";
    }
}

// window.matchMedia("max-width: 1180px") = () => {
//     if (header.hasAttribute("position")) {
//         header.style.width = " 65%";
//     } else {
//         header.style.width = "100%";
//     }
// }


window.onresize = () => {
    let windowWidth = window.innerWidth;

    if (windowWidth > 1180) {
        navbarLinks.classList.remove('active');
        cartContainer.classList.remove('active');
    }
}