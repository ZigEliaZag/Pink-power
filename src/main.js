// active navigation bar when clicked

const showMenu = document.querySelector("header .click-to-open");
const navBar = document.querySelector("header .navbar-large-screen");

function openMenu() {
    showMenu.classList.toggle("active");
    navBar.classList.toggle("open")

}

showMenu.addEventListener("click", openMenu);

console.log("heeej")