const header = document.querySelector('header')
const overlay = document.querySelector('.overlay')
const menuIcon = document.querySelector('.menu-icon')
const navHeader = document.querySelector('.header-nav')
const horizonBar = document.querySelector('.horizon-bar')
const menuMobile = document.querySelector('.menu-mobile')
const xMenuMobile = document.querySelector('.x-menu-mobile')
const menuIconMobile = document.querySelector('.menu-icon-mobile')

function hiddenMenuMobile() {
    overlay.classList.add('hidden')
    overlay.classList.remove('block')
    overlay.classList.remove('toRight')
    menuMobile.classList.add('currentToLeft')
    setTimeout(() => {
        menuMobile.classList.add('hidden')
        menuMobile.classList.remove('block')
    }, 450);
}

document.onscroll = () => {
    if (window.scrollY > header.offsetHeight + navHeader.offsetHeight) {
        horizonBar.classList.add('hidden')
        horizonBar.classList.remove('block')
        navHeader.classList.add('fixedElement')
    } else {
        navHeader.classList.remove('fixedElement')
    }
};

menuIcon.onclick = function () {
    if (horizonBar.classList.contains("hidden")) {
        horizonBar.classList.add('block')
        horizonBar.classList.add('toTop')
        horizonBar.classList.remove('hidden')
        horizonBar.classList.remove('currentToBottom')
    } else {
        horizonBar.classList.remove('toTop')
        horizonBar.classList.add('currentToBottom')
        setTimeout(() => {
            horizonBar.classList.add('hidden')
            horizonBar.classList.remove('block')
        }, 450);
    }
}

menuIconMobile.onclick = function () {
    overlay.classList.add('block')
    menuMobile.classList.add('block')
    overlay.classList.remove('hidden')
    menuMobile.classList.add('toRight')
    menuMobile.classList.remove('hidden')
    menuMobile.classList.remove('currentToLeft')
}

xMenuMobile.onclick = hiddenMenuMobile
overlay.onclick = hiddenMenuMobile