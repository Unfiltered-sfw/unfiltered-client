
const setFormsEventListeners = () => {
    const forms = document.querySelectorAll("form")
    for (let form of forms) {
        form.addEventListener('submit', createNewEntry);
    }
}


const setGiphyEventListeners = () => {
    const giphyDiv = document.querySelectorAll('.giphy-button')
    for(let div of giphyDiv) {
        div.addEventListener('click', e => {
            e.preventDefault()
            const parent = e.target.parentNode;
            let searchString = parent.childNodes[3].value
            searchGiphy(searchString, parent)
        })
    }
}


const setReactionListeners = () => {       
    const postReactionParent = document.querySelectorAll('.post-reactions')
    for (let block of postReactionParent ) {
        const spans = block.querySelectorAll('button')
        for (let span of spans) {
            span.addEventListener('click', addReactionToPost)
        }
    }
}

// For the test suite
if (typeof module !== 'undefined') {
    module.exports = {
        setFormsEventListeners,
        setGiphyEventListeners,
        setReactionListeners
    }
}