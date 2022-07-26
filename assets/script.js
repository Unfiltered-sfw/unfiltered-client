// reaction handlers
const sendReaction = (reaction, count, id, type) => {
    console.log(`Changing ${type}'s ${reaction} count to : ${count} for the id= ${id}`)
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
            if(item.id === post.id) {
                obj.posts.comments = item.comments
            }
        })
        arr.push(obj)
    }
    return arr
}



// Fetch data
const rootUrl = "https://unfiltered-app.herokuapp.com/";

fetch(rootUrl+'posts')
    .then(res => res.json())
    .then(data => {
        fetch(rootUrl+ "comments")
            .then(res => res.json())
            .then(comments => {
                console.log(data)
                console.log(comments)
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
            })
    })


