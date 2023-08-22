document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('div#splash-screen');

    setTimeout(() => {
        splashScreen.classList.toggle('hidden')
    }, 4600)
})