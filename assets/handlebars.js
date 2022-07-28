const assignCommentsToPosts = (data, comments) => {
    let arr = [];
    console.log(data)
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
    
    setReactionListeners()
    setGiphyEventListeners()
    setFormsEventListeners()
}

// For the test suite
if (typeof module !== 'undefined') {
    module.exports = {
        assignCommentsToPosts,
        printContent

    }
}
