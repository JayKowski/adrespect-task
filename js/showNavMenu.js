document.addEventListener('DOMContentLoaded', () => {

    // select menu icon and menu to be toggled
    const toggleMenuBtn = document.querySelector('nav div.menu-icon-div')
    const menuBtnIcon = document.querySelector('nav div.menu-icon-div > span > img')
    const smallMenu = document.querySelector('div.small-menu');
    let menuShow = false;
    
    // show small menu when menuBtn is clicked
    toggleMenuBtn.addEventListener('click', () => {
        smallMenu.classList.toggle('hidden');
        if(menuShow) {
            menuBtnIcon.setAttribute('src', './images/menu-icon.svg')
        } else {
            menuBtnIcon.setAttribute('src', './images/close-icon-dark.svg')
        }
        menuShow = !menuShow
    })

    smallMenu.addEventListener('click', () => {
        smallMenu.classList.toggle('hidden');
        menuBtnIcon.setAttribute('src', './images/menu-icon.svg')
    })
});