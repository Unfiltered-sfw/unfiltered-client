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
const sendReaction = (reaction, count, id) => {
    console.log(`Changing ${reaction} count to : ${count} for the id= ${id}`)
}
const addReactionToPost = (e) => {
    e.preventDefault();
    const span = e.currentTarget.querySelector('span')
    const reaction = span.dataset.reaction
    const id = span.dataset.id
    console.log(reaction, id)
    const currentCount = parseInt(span.innerText)
    const newCount = currentCount + 1;
    sendReaction(reaction, newCount, id)
}

const reactionGrandparent = document.querySelectorAll('.post-reactions')

for (let block of reactionGrandparent ) {
    const spans = block.querySelectorAll('button');
    for (let span of spans) {
        span.addEventListener('click', addReactionToPost);
    }
}