// active navigation bar when clicked

const showMenu = document.querySelector("header .click-to-open");
const navBar = document.querySelector("header .navbar-large-screen");

function openMenu() {
    // active menu button when click, nav rotate into X 
    showMenu.classList.toggle("active");
    // show menu in navbar when click
    navBar.classList.toggle("open")

}

showMenu.addEventListener("click", openMenu);
