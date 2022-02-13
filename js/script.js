// Header desplegable
const header = document.querySelector('header')
const logo = document.getElementById('logo')
const link = document.getElementsByClassName('link')
const menu = document.getElementById('menu-mobile')

document.addEventListener('scroll', dinamycMenu)

function dinamycMenu(){
    if (window.pageYOffset >= 30) {

        header.classList.add('header-is-active')
        header.style.color= "black"
        logo.src="images/Logo-black.png";
        
    } else {
        header.classList.remove('header-is-active')
        header.style.color= "white"
        logo.src="images/Logo-white.png";

    }
} 


// Menu Hamburger

const buttonHamburgerOpen = document.querySelector('.menu-icon-open')
const buttonHamburgerClose = document.querySelector('.menu-icon-close')
const menuNav = document.querySelector('.menu-container')

buttonHamburgerOpen.addEventListener('click', () => {
    menuNav.classList.add('menu-is-active')
})

buttonHamburgerClose.addEventListener('click', () => {
    menuNav.classList.remove('menu-is-active')
})
