const heroImgLinks = [
    'https://images.unsplash.com/photo-1624190011779-081f7cd23eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyfHxnYXJkZW5zfGVufDB8fHx8MTY5MjY1MTc0Mnww&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw0fHxnYXJkZW5zfGVufDB8fHx8MTY5MjY1MTc0Mnww&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjY1MjI0MXww&ixlib=rb-4.0.3&q=80&w=1080',
    './images/sect-1-photo.jpg'
]

document.addEventListener('DOMContentLoaded', () => {
    const heroBtnsDiv = document.querySelector('div.hero-div > div > div.hero-block-btns');
    const heroDiv = document.querySelector('div.hero-div');

    let linkIndex = 0;

    heroBtnsDiv.addEventListener('click', e => {
        let targetClass = e.target.classList[0];

        switch(targetClass) {
            case 'hero-btn-left':
                linkIndex = linkIndex-1 < 0 ? heroImgLinks.length-1 : linkIndex - 1;
                break;
            case 'hero-btn-right':
                linkIndex = linkIndex+1 > heroImgLinks.length-1 ? 0 : linkIndex+1;
                break;
            default:
                true;
        }
        heroDiv.style.backgroundImage = `url(${heroImgLinks[linkIndex]})`
    })
})