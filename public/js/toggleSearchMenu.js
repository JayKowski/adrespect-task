console.log('Search menu is now online! :)')

document.addEventListener('DOMContentLoaded', () => {
    // grab search buttons to attach event listeners to
    const searchBtns = Array.from(document.querySelectorAll('#search-btn'))
    // grab search engine form
    const searchForm = document.querySelector('div#search-form')

    searchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            searchForm.classList.toggle("hidden")
        })
    })
    
    // event listener to close menu
    const closeSearchMenuBtn = document.querySelector('div#close-search-menu')
    closeSearchMenuBtn.addEventListener('click', () => searchForm.classList.toggle("hidden"))
    console.log(closeSearchMenuBtn)
})