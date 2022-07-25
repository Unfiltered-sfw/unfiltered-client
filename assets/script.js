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
    console.log(arr)
    return arr
}

const postInfo = document.getElementById("post-template").innerHTML;
const template = Handlebars.compile(postInfo);

const preparedObj = assignCommentsToPosts(data,comments);
const postData = template({
    posts: preparedObj
})

document.getElementById('post-wrapper').innerHTML += postData
