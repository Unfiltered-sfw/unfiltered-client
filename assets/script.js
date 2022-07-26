const rootUrl = "https://unfiltered-app.herokuapp.com/";

// set state of the app
const state = {
    data: [
    ],
    comments: [
    ]
}

// reaction handlers
const sendReaction = (reaction, count, id, type) => { //either postID or commentID
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
    fetch(rootUrl + suffix,
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(state.comments)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


const addReactionToPost = (e) => {
    e.preventDefault();
    const span = e.currentTarget.querySelector('span')
    const reaction = span.dataset.reaction
    const id = span.dataset.id
    const type = span.dataset.type
    const currentCount = parseInt(span.innerText)
    const newCount = currentCount + 1;
    span.textContent = newCount;
    sendReaction(reaction, newCount, id, type)
}

// Set new post handlers
const createNewPost = (e) => {
    e.preventDefault();
    id = state.data.length
    const newDataObject = {
        id: id,
        title: e.target.elements[0].value,
        post: e.target.elements[1].value,
        reaction: {
            heart: 0,
            like: 0,
            dislike: 0,
        }
    }

    const newCommentsObject = {
        postId: id,
        name: '',
        comments: [

        ]
    }
    const newData = {data: [newDataObject]}
    const newComm = {comments: [newCommentsObject]}
    state.data.push(newDataObject)
    state.comments.push(newCommentsObject)
    printContent(newData, newComm)

    fetch(rootUrl + 'posts', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(state.data)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}

form.addEventListener('submit', createNewPost);


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

const printContent = (data, comments) => {
    const postInfo = document.getElementById("post-template").innerHTML;
                const template = Handlebars.compile(postInfo);
                const preparedObj = assignCommentsToPosts(data.data,comments.comments);
                const postData = template({
                    posts: preparedObj
                })  
                document.getElementById('post-wrapper').innerHTML += postData
                
                const postReactionParent = document.querySelectorAll('.post-reactions')

                for (let block of postReactionParent ) {
                    const spans = block.querySelectorAll('button');
                    for (let span of spans) {
                        span.addEventListener('click', addReactionToPost);
                    }
                }
}

// Fetch data
fetch(rootUrl+'posts')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        fetch(rootUrl+ "comments")
            .then(res => res.json())
            .then(comments => {
                state.data = data.data
                state.comments = comments.comments
                console.log(state.data)
                printContent(data, comments)
            })
        })
        


