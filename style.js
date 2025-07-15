var hamburger = document.querySelector('.burger')
var mobileLinks = document.querySelector('.mobile-menu-links')
var backdrop = document.querySelector('.backdrop')

function Addclass() {
    hamburger.classList.toggle('show')
    mobileLinks.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}

