document.addEventListener('DOMContentLoaded', () => {
    
    const showProposalBtns = Array.from(document.querySelectorAll('li#show-proposal-btn'));
    const proposalForm = document.querySelector('div#proposal-form')

    showProposalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            proposalForm.classList.toggle('hidden')
        })
    })

    // grab close btn to close proposal form

    const closeProposalFormBtn = document.querySelector('div#close-proposal-form')
    closeProposalFormBtn.addEventListener('click', () => proposalForm.classList.toggle('hidden'))
})