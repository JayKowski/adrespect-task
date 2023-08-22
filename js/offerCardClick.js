const offerCardPopupImages = [
    [
        'https://images.unsplash.com/photo-1669024808541-71f502ac6e42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1690807067275-c7cf8807490e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1682844189650-cc296f2f6790?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    ],
    [
        'https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
        'https://images.unsplash.com/photo-1660361339525-d24a9965119b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
        'https://images.unsplash.com/photo-1676566938818-5d08e2ddb7d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1191&q=80'
    ],
    [
        'https://images.unsplash.com/photo-1624190011779-081f7cd23eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyfHxnYXJkZW5zfGVufDB8fHx8MTY5MjY1MTc0Mnww&ixlib=rb-4.0.3&q=80&w=1080',
        'https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHw0fHxnYXJkZW5zfGVufDB8fHx8MTY5MjY1MTc0Mnww&ixlib=rb-4.0.3&q=80&w=1080',
        'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTEzNjd8MHwxfHNlYXJjaHwyfHxnYXJkZW5fZGVzaWdufGVufDB8fHx8MTY5MjY1MjI0MXww&ixlib=rb-4.0.3&q=80&w=1080'
    ]
]

document.addEventListener('DOMContentLoaded', () => {
    const offerCardsParent = document.querySelector('div.offer-block-cards');
    const cardsArray = Array.from(offerCardsParent.children)
    let clickedCardIndex, popupBackgroundImageDiv, moreInfoCard;
    const imageLegendDiscs = document.querySelector('div.image-legend-discs');
    const legendDiscs = Array.from(imageLegendDiscs.children);

    offerCardsParent.addEventListener('click', e => {
        const clickedCard = e.target.closest('.offer-card');
        clickedCardIndex = cardsArray.indexOf(clickedCard);
        
        // grab the pop up data to be dynamicized
        moreInfoCard = document.querySelector('div.more-info-card');
        const popupHeading = document.querySelector('div.card-info-body > h1.popup-heading');
        popupBackgroundImageDiv = document.querySelector('div.project-image-div');

        // grab data to be put into dynamicized elements based on the card clicked
        moreInfoCard.classList.toggle('hidden');

        popupHeading.textContent = clickedCard.id;
        legendDiscs[0].style.scale = '1.4'
        popupBackgroundImageDiv.style.backgroundImage = `url(${offerCardPopupImages[clickedCardIndex][0]})`
        
    })
    
    // add event listener to listen for clicked discs

    imageLegendDiscs.addEventListener('click', e => {
        const clickedDisc = e.target.closest('.disc');
        const clickedDiscIndex = legendDiscs.indexOf(clickedDisc);
        // change popup div background image 
        popupBackgroundImageDiv.style.backgroundImage = clickedDiscIndex > -1 && `url(${offerCardPopupImages[clickedCardIndex][clickedDiscIndex]})`
        
        if(clickedDiscIndex > -1) {
            legendDiscs.forEach((disc, val) => {
                disc.style.scale = '1'
                clickedDiscIndex === val ? disc.style.scale = '1.5' : false;
                // clickedDiscIndex === val && disc.classList.toggle()
            })
        }
    })

    // close the project viewer
    const closeBtn = document.querySelector('div.items-center div.close-viewer')
    
    closeBtn.addEventListener('click', () => {
        legendDiscs.forEach(disc => disc.style.scale = '1')
        moreInfoCard.classList.toggle('hidden')
    })

    // Contact Button Listener
    const contactBtn = document.querySelector('#popup-contact-btn');
    contactBtn.addEventListener('click', () => moreInfoCard.classList.toggle('hidden'))
})