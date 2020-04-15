// STEP 1 - Define your page variable
const menu = [];
let currentIndex = 0;


// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements
const nextMenu = document.querySelector('#nextButton');
const previousMenu = document.querySelector('#previousButton');
const soup = document.querySelector("#soup h1");
const soupPrice = document.querySelector("#soup p");
const salad = document.querySelector("#salad h1");
const saladPrice = document.querySelector("#salad p");
const lighterfare = document.querySelector("#lighterfare h1");
const lighterfarePrice = document.querySelector("#lighterfare p");
const entree = document.querySelector("#entree h1");
const entreePrice = document.querySelector("#entree p");
const menuTitle = document.querySelector("#menu h2");

// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above
function display(todaysmenu) {
    menuTitle.textContent = todaysmenu.title;
    soup.textContent = todaysmenu.soup;
    soupPrice.textContent = todaysmenu.soupPrice;
    salad.textContent = todaysmenu.salad;
    saladPrice.textContent = todaysmenu.saladPrice;
    lighterfare.textContent = todaysmenu.lighterFare;
    lighterfarePrice.textContent = todaysmenu.lighterFarePrice;
    entree.textContent = todaysmenu.entree;
    entreePrice.textContent = todaysmenu.entreePrice;
}

async function init() {
    const res = await fetch("https://gist.githubusercontent.com/dorukhanuzun/572f5fd658e9843cad4c4a05255e95b1/raw/5874d7548e18094680d87baba7dc7e4450308e2e/menu.json");
    const data = await res.json();
    menu.push(...data);
    display(menu[currentIndex]);
}

// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable

function next() {
    currentIndex = currentIndex === menu.length - 1 ? 0 : currentIndex + 1;
    display(menu[currentIndex]);
}

// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale


function prev() {
    currentIndex = currentIndex === 0 ? menu.length - 1 : currentIndex - 1;
    display(menu[currentIndex]);
}


// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.

// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.

previousMenu.addEventListener("click", prev);
nextMenu.addEventListener("click", next);

// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.

init();
