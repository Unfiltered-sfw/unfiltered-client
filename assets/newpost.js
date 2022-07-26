const form = document.getElementById('form');
const post = document.getElementById('post');
const reactions = document.getElementById('reactions-count-post-buttons');

form.addEventListener('submit', createNewPost);

function createNewPost(e) {

    e.preventDefault();

    const newTitle = document.createElement('h3');
    const newPost = document.createElement('p');
    
    const titleText = document.getElementById('post-title').value;
    const postText = document.getElementById('post-content').value;
    

    newTitle.textContent = titleText;
    newPost.textContent = postText;

    form.appendChild(newTitle);
    form.appendChild(newPost);
    // form.appendChild(reactions)

   console.log(newTitle);
   console.log(newPost);
}

