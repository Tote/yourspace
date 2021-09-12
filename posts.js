function createPost(type, topic){
    const post      = document.createElement('div') 
    const likesInfo = document.createElement('div')
    let likeCounter = 0

    const updateLikes = likes => {
        likeCounter += likes
        likesInfo.textContent = `${likeCounter} likes`
    } 

    post.textContent = `Your ${type} about ${topic} is active`
    post.appendChild(likesInfo)
    updateLikes(0)

    activePosts.insertBefore(post, activePosts.firstChild)
    return updateLikes
}
function postText(){
    const post = createPost('text', 'animals')
    console.log(post)
    
    distributeLikes(1000000, 14, post)
}

textPost.onclick = (e,v) => postText()

