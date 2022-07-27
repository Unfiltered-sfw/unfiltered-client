const rootUrl = "http://localhost:3000/";

// set state of the app
const state = {
    data: [
    ],
    comments: [
    ]
}

// reaction handlers
const sendReaction = (reaction, count, id, type) => { 
    let suffix =''
    if( type == 'post') {
        suffix = 'posts'
        state.data.filter(post => {
            if( post.id == id) {
                state.data[id].reaction[`${reaction}`] = count
            }            
        })
    } else if (type === 'comment') {
        suffix = 'comments'
        state.comments.filter((commentArr, index) => {
            commentArr.comments.filter(comment => {
                if( comment.id == id) {
                    state.comments[index].comments[id].reaction[`${reaction}`] = count
                }
            })
        })
    }  

    //TODO this will have to go to a separate fun for testing sendReaction
    fetch(rootUrl + suffix,
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(state.comments)
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
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

const postNewEntry = (suffix, objToSend) => {
    fetch(rootUrl + suffix, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(objToSend)
    })
    .then(res => console.log(res))
    .then(() => {
        window.location.reload();
    })
    .catch(err => console.log(err))
}

// Set new post handlers
const createNewEntry = (e) => {
    e.preventDefault();
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
        debugger
        const newComment = {
            id: id,
            content: e.target.elements[2].value,
            reaction: {
                heart: 0,
                like: 0,
                dislike: 0,
            }
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


// Handlebars handlers

const assignCommentsToPosts = (data, comments) => {
    let arr = [];
    for(let post of data) {
        let obj = {}
        obj.posts = post
        comments.filter(item => {
            if(item.postId === post.id) {
                obj.posts.comments = item.comments
            }
        })
        arr.push(obj)
    }
    return arr
}

// Set Event Listeners needed

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
            searchGiphy(searchString)
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

// Prints fetched content to the website, also updates new posts when added
const printContent = (data, comments) => {
    const postInfo = document.getElementById("post-template").innerHTML;
    const template = Handlebars.compile(postInfo);
    const preparedObj = assignCommentsToPosts(data.data,comments.comments);
    const postData = template({
        posts: preparedObj
    })  
    document.getElementById('post-wrapper').innerHTML += postData
    
    setReactionListeners()
    setGiphyEventListeners()
    setFormsEventListeners()
}

// Fetch data
fetch(rootUrl+'posts')
    .then(res => res.json())
    .then(data => {
        fetch(rootUrl+ "comments")
            .then(res => res.json())
            .then(comments => {
                state.data = data.data
                state.comments = comments.comments
                printContent(data, comments)
            })
        })
        

        

        
const displayGiphy = (data) => {
    const arr = []
    for (let i=0; i<12; i++){
        arr.push(data.data[i].embed_url)
    }
    //TODO here paste the function from the guys
    return arr
}


const searchGiphy = (searchString) => {
    const API_KEY = "7GyDNRXixRNrwh8PGwOdMCLZfNoM2Wf6"

    fetch("https://api.giphy.com/v1/gifs/search?api_key="+API_KEY+"&q="+searchString)
    .then(res => res.json())
    .then((data) => {
        displayGiphy(data)})
}

// For the test suite
if (typeof module !== 'undefined') {
    module.exports = {
        sendReaction,
        addReactionToPost,
        assignCommentsToPosts
    }
}

