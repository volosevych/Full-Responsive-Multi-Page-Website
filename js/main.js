var navLinks = document.getElementById('navLinks');

function showMenu() {
    // changing right from -200px to zero
    navLinks.style.right = "0";
}

function hideMenu() {
    // changing right from 0 to -200px
    navLinks.style.right = "-200px";
}