// reaction handlers
const sendReaction = (reaction, count, id, type) => { 
    let suffix =''
    let toSend = {}
    if( type == 'post') {
        suffix = 'posts'
        state.data.filter(post => {
            if( post.id == id) {
                state.data[id].reaction[`${reaction}`] = count
            }            
        })
        toSend = {data: state.data}
    } else if (type === 'comment') {
        // debugger
        suffix = 'comments'
        state.comments.filter((commentArr, index) => {
            commentArr.comments.filter((comment, ind) => {
                const intId = parseInt(id)
                if( comment.id == intId) {
                    state.comments[index].comments[ind].reaction[`${reaction}`] = count
                }
            })
        })
        toSend = {comments: state.comments}
    }  
    sendReactionToServer (rootUrl, suffix, toSend)
}

const addReactionToPost = (e) => {
    e.preventDefault();
    const span = e.currentTarget.querySelector('span')
    const reaction = span.dataset.reaction
    const id = span.dataset.id
    const type = span.dataset.type
    const currentCount = parseInt(span.innerText)
    const newCount = currentCount + 1
    span.textContent = newCount
    sendReaction(reaction, newCount, id, type)
}

// For the test suite
if (typeof module !== 'undefined') {
    module.exports = {
        sendReaction,
        addReactionToPost
    }
}
