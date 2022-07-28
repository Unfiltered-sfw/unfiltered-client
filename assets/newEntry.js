// Set new post handlers
const createNewEntry = (e) => {
    console.log(e.target)
    if (typeof e.preventDefault == 'function') {
        e.preventDefault();
    }
    const postOrComment = e.target.dataset.type
    let objToSend = {}
    let suffix = 'posts'
    let id

    if(postOrComment === 'post') {
        const newDataObject = {
            id: state.data.length,
            title: e.target.elements[0].value,
            post: e.target.elements[1].value,
            reaction: {
                heart: 0,
                like: 0,
                dislike: 0,
            }
        }
        objToSend = {data: state.data}
        suffix = 'posts'
        state.data.push(newDataObject)
        postNewEntry(suffix, objToSend)

    } else if (postOrComment === 'comment') {
        const postId = e.target.dataset.belongs
        let doesExist = false
        id = Math.floor(Math.random()*100000)
        const newCommentsObject = {
            postId: parseInt(postId),
            name: '',
            comments: [
                
            ]
        }
        console.log(e.target.elements)
        const newComment = {
            id: id,
            content: e.target.elements[0].value,
            isGiphy: undefined,
            reaction: {
                heart: 0,
                like: 0,
                dislike: 0,
            }
        }
        if (typeof e.target.dataset.isGiphy != 'undefined') {
            newComment.isGiphy = true
        }
        state.comments.filter((post, index) => {
            if(post.postId == postId) {
                state.comments[index].comments.push(newComment)
                doesExist = true
            }
        })
        if (!doesExist) {
            newCommentsObject.comments.push(newComment)
            state.comments.push(newCommentsObject)
        }
        objToSend = {comments: state.comments}
        suffix = 'comments'
        console.log(objToSend)
        postNewEntry(suffix, objToSend)


    } else {
        alert('sorry, this function is not yet handled by our ser')
    }

}

// For the test suite
if (typeof module !== 'undefined') {
    module.exports = {

    }
}