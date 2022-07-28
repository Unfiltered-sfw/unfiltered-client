const sendReactionToServer = (rootUrl, suffix, toSend) => {
    fetch(rootUrl + suffix,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(toSend)
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
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
        

        
const postImage = (src) => {
    console.log(src)
    const e = {
        target: {
            dataset: {
                type: 'comment',
                belongs: 0,
                isGiphy: true,
            },
            elements : [
                { value : src }
            ]
        }
    }  
    createNewEntry(e)
}
    
const displayGiphy = (data, div) => {
    console.log(data)
    const arr = []
    for (let i=0; i<12; i++){
        if (typeof data.data[i].user != 'undefined') {

            arr.push(data.data[i].user["avatar_url"])
            console.log(data.data[i].user["avatar_url"])
        }
    }
    console.log(arr)
    const wrapper = document.createElement('div')
    wrapper.classList.add("flex-img")
    arr.map(href => {
        wrapper.innerHTML += "<img width='250px' role='button' onclick='postImage(this.src)' src='"+href+"'>"
    })
    div.parentNode.insertBefore(wrapper, div.nextSibling)
    //TODO here paste the function from the guys
    return arr
}


const searchGiphy = (searchString, div) => {
    const API_KEY = "7GyDNRXixRNrwh8PGwOdMCLZfNoM2Wf6"

    fetch("https://api.giphy.com/v1/gifs/search?api_key="+API_KEY+"&q="+searchString)
    .then(res => res.json())
    .then((data) => {
        if (data.data.length > 0) {
            displayGiphy(data, div)
        } else {
            alert('Sorry, no giphy for this phrase')
        }
    })
}


/**
 * NO TESTING NEEDED HERE
 */