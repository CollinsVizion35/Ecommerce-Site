//Grab elements

const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Oops, something went wrong, make sure that ${selector} exists or is typed correctly`);
};

// declaration of variables

const menu = document.querySelector('#menu-ul');
const menulink = document.querySelector('#menu-link');
const featured = selectElement('.featured');
const main = selectElement('main');
const footer = selectElement('footer');
const searchIcon = selectElement('.search-icon');
const searchBar = document.getElementById('search-bar');
const searchBox = document.querySelector('.search-box');
const cartIcon = selectElement('.cart-icon');
const viewIcon = document.querySelector('.view-box');
const cartBox = selectElement('.cart-box');
const closeCartIcon = selectElement('.close-cart-icon');
const loadingScreen = document.querySelector('.loading-screen');



// // remove any toggle on click of the main tag section
// main.addEventListener('click', () => {
//     cartBox.classList.remove('activated');
//     menu.classList.remove('active');
//     searchBar.classList.remove('activated');
// });

// // remove any toggle on click of the footer tag section
// footer.addEventListener('click', () => {
//     cartBox.classList.remove('activated');
//     menu.classList.remove('active');
//     searchBar.classList.remove('activated');
// });

// loading page

setTimeout (() => {
    loadingScreen.style.display = 'none';
    main.style.display = 'block';
    footer.style.display = 'block';
}, 4000);

//Toggle Menu bar
(function() {
    var 	menu = document.querySelector('#menu-ul'),
        menulink = document.querySelector('#menu-link');

        menulink.addEventListener('click', function(e) {
        menu.classList.toggle('active');
        e.preventDefault();
    });
})();

menulink.addEventListener('click', () => {
    cartBox.classList.remove('activated');
    searchBar.classList.remove('activated');
    favBox.classList.remove('activated');
    searchBox.classList.remove('activated');
});

//toggle search bar

// const searchIcon = selectElement('.search-icon');
// const searchBar = selectElement('.bar');

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('activated');
    searchBox.classList.toggle('activated');
});

searchIcon.addEventListener('click', () => {
    cartBox.classList.remove('activated');
    menu.classList.remove('active');
});

//toggle cart

// const cartIcon = selectElement('.cart-icon');
// const cartBox = selectElement('.cart-box');
// const closeCartIcon = selectElement('.close-cart-icon');

cartIcon.addEventListener('click', () => {
    cartBox.classList.toggle('activated');
});

closeCartIcon.addEventListener('click', () => {
    cartBox.classList.remove('activated');
});

cartIcon.addEventListener('click', () => {
    searchBar.classList.remove('activated');
    menu.classList.remove('active');
    searchBox.classList.remove('activated');
});





//toggle cart lg-screen
const cartIcon_2 = selectElement('.cart-icon-2');
const searchIcon_2 = selectElement('.ri-search-2-line') //search bar lg-screen

cartIcon_2.addEventListener('click', () => {
    cartBox.classList.toggle('activated');
    searchBox.classList.remove('activated');
});

featured.addEventListener('click', () => {
    cartBox.classList.remove('activated');
    searchBox.classList.remove('activated');
});

searchIcon_2.addEventListener('click', () => {
    cartBox.classList.remove('activated');
    searchBox.classList.toggle('activated');
});

// toggle search bar lg-screen


searchIcon_2.addEventListener('click', () => {
    searchBar.classList.toggle('activated');
    searchBox.classList.toggle('activated');
});

cartIcon_2.addEventListener('click', () => {
    searchBar.classList.remove('activated');
});

featured.addEventListener('click', () => {
    searchBar.classList.remove('activated');
});




