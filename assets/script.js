const commentWrapper = document.getElementById('comment-wrapper');
const targetPostArr = comments.filter(comment => {
    if (comment.post_id == 0) {
        return comment
    }
});
const targetPost = targetPostArr[0];
targetPost.comments.map((elem, index) => {
    console.log(index)
    const node = `
    <hr class="mb40">
                    <div class="media mb40">
                        <div class="media-body" id="comment-wrapper">
                            <h5 class="mt-0 font400 clearfix">
                                Jane Doe
                            </h5>
                            <p>${elem.content}</p>
                            <div class="reactions">
                                <div class="reaction-buttons">
                                    <button class="btn rounded-circle"><i class="fa fa-heart red">
                                    </i><span class="badge badge-pill badge-light">${elem.reactions.heart}</span></button>
                                    <button class="btn rounded-circle"><i class="fa fa-thumbs-up yellow"></i><span class="badge badge-pill badge-light">${elem.reactions.like}</span></button>
                                    <button class="btn rounded-circle"><i class="fa fa-thumbs-down blue"></i><span class="badge badge-pill badge-light">${elem.reactions.dislike}</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
    `
    commentWrapper.insertAdjacentHTML('afterend', node);


})