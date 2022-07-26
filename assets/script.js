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

const postInfo = document.getElementById("post-template").innerHTML;
const template = Handlebars.compile(postInfo);

const preparedObj = assignCommentsToPosts(data,comments);
const postData = template({
    posts: preparedObj
})

document.getElementById('post-wrapper').innerHTML += postData

// reaction handlers
const sendReaction = (reaction, count, id, type) => {
    console.log(`Changing ${type}'s ${reaction} count to : ${count} for the id= ${id}`)
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

const postReactionParent = document.querySelectorAll('.post-reactions')

const commentReactionParent = document.querySelectorAll('comment-reaction')
for (let block of postReactionParent ) {
    const spans = block.querySelectorAll('button');
    for (let span of spans) {
        span.addEventListener('click', addReactionToPost);
    }
}