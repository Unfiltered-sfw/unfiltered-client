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
    let commOrPost;
    if( type == 'post') {
        state.data.filter(post => {
            if( post.id == id) {
                state.data[id].reaction[`${reaction}`] = count
            }            
        })
    } else if (type === 'comment') {
        state.comments.filter((commentArr, index) => {
            commentArr.comments.filter(comment => {
                if( comment.id == id) {
                    state.comments[index].comments[id].reaction[`${reaction}`] = count
                    console.log(state.comments[index].comments[id].reaction[`${reaction}`])

                }
            })
        })
    }  
    fetch(rootUrl,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(state)
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
const addReactionToPost = (e) => {
    console.log('click')
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



// Fetch data
fetch(rootUrl+'posts')
    .then(res => res.json())
    .then(data => {
        fetch(rootUrl+ "comments")
            .then(res => res.json())
            .then(comments => {
                const postInfo = document.getElementById("post-template").innerHTML;
                const template = Handlebars.compile(postInfo);
                const preparedObj = assignCommentsToPosts(data.data,comments.comments);
                const postData = template({
                    posts: preparedObj
                })  
                document.getElementById('post-wrapper').innerHTML += postData
                
                const postReactionParent = document.querySelectorAll('.post-reactions')

                const commentReactionParent = document.querySelectorAll('comment-reaction')
                for (let block of postReactionParent ) {
                    const spans = block.querySelectorAll('button');
                    for (let span of spans) {
                        span.addEventListener('click', addReactionToPost);
                    }
                }
                state.data = data.data
                state.comments = comments.comments
            })
        })
        

