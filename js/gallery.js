document.addEventListener('DOMContentLoaded', () => {
    
    const imagesGrid = document.querySelector('div.gallery-div div.images-grid');
        galleryViewer = document.querySelector('div.gallery-viewer')
        topLegend = document.querySelector('div.gallery-img-main > div.text-center > span');
        galleryThumbsDiv = document.querySelector('div.thumbs-sect > div.thumbs-div > div.gallery-thumbs')
        
    let clickedDivIndex, clickedImageUrl, imageItemDivs, galleryImageMain, imageLinks, populatedImageGrid,
    galleryThumbs = Array.from(galleryThumbsDiv.children);
    
    // E V E N T  L I S T E N E R  T O  T R I G G E R  G A L L E R Y
    imagesGrid.addEventListener('click', e => {
        galleryViewer.classList.remove('hidden');
        populatedImageGrid = document.querySelector('div.gallery-div div.images-grid');
        imageItemDivs = Array.from(populatedImageGrid.children);
        
        imageLinks = imageItemDivs.map(item => item.children[0].getAttribute('src'))
        
        // C R E A T   G A L L E R Y  T H U M B S
        const newThumbs = imageItemDivs.map((_, val) => {
            let thumbDiv = new Element ('div', 'thumb-tile bg-[#000] w-[5rem] h-[3rem] mr-[.5rem] rounded-[.25rem] max-[680px]:mt-[.5rem] max-[680px]:w-[3rem] max-[680px]:h-[2rem]')
            thumbStyles = {
                backgroundImage: `url(${imageLinks[val]})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
            }

            Object.assign(thumbDiv.style, thumbStyles);
            val !== clickedDivIndex && thumbDiv.classList.add('opacity-25')
            return thumbDiv
        });

        newThumbs.forEach(thumb => galleryThumbsDiv.appendChild(thumb))

        galleryThumbDivs = document.querySelector('div.thumbs-sect > div.thumbs-div > div.gallery-thumbs')
        galleryThumbs = Array.from(galleryThumbDivs.children);
        clickedDivIndex = imageItemDivs.indexOf(e.target.parentElement)
        
        // T O G G L E  A C T I V E  T H U M B
        galleryThumbs.forEach((thumb, val) => {
            thumb.classList.add('opacity-25')
            val === clickedDivIndex && thumb.classList.toggle('opacity-25')
        })

        imageItemDivs[clickedDivIndex]
        clickedImageUrl = e.target.getAttribute('src');
        galleryImageMain = document.querySelector('div.gallery-img-main > img');
        topLegend.textContent = `${clickedDivIndex+1} of ${imageItemDivs.length}`
        galleryImageMain.setAttribute('src', clickedImageUrl)
    })

    const mainGallerySlide = document.querySelector('div.main-gallery-slide')

    mainGallerySlide.addEventListener('click', e => {
        const target = e.target;
        switch(target.parentElement.id) {
            case "gallery-main-next":
                clickedDivIndex = clickedDivIndex >= imageItemDivs.length-1 ? 0 : clickedDivIndex + 1;
                break;
            case "gallery-main-prev":
                clickedDivIndex = clickedDivIndex-1 < 0 ? imageItemDivs.length - 1 : clickedDivIndex -1;
                break;
            default:
                true;
        }
        const currentImgUrl = imageItemDivs[clickedDivIndex].children[0].getAttribute('src');
        topLegend.textContent = `${clickedDivIndex+1} of ${imageItemDivs.length}`
        galleryImageMain.setAttribute('src', currentImgUrl)

        galleryThumbs.forEach((thumb, val) => {
            thumb.classList.add('opacity-25')
            val === clickedDivIndex && thumb.classList.toggle('opacity-25')
        })
    })

    // CLOSE BUTTON EVENT LISTENER

    const closeBtn = document.querySelector('div.gallery-viewer > div.flex-col > div.close-btn > span')
    closeBtn.addEventListener('click', () => {
        galleryViewer.classList.add('hidden');
        Array.from(galleryThumbsDiv.children).forEach(child => child.remove());
    })

    // set image viewed based on clicked thumb
    galleryThumbsDiv.addEventListener('click', e => {

        if(e.target.classList[0] === 'thumb-tile') {
            clickedDivIndex = galleryThumbs.indexOf(e.target);
            topLegend.textContent = `${clickedDivIndex+1} of ${imageItemDivs.length}`
    
            galleryThumbs.forEach((thumb, val) => {
                thumb.classList.add('opacity-25')
                val === clickedDivIndex && thumb.classList.toggle('opacity-25')
            })
    
            const extractedUrl = getComputedStyle(e.target).backgroundImage.split('"')[1]
            galleryImageMain.setAttribute('src', extractedUrl)
        }
        
    })

})