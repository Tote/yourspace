
typeText.onclick        = () => currentPostType.textContent = 'text'
typePhoto.onclick       = () => currentPostType.textContent = 'photo'
typeVideo.onclick       = () => currentPostType.textContent = 'video'
typeSong.onclick        = () => currentPostType.textContent = 'song'
typeLink.onclick        = () => currentPostType.textContent = 'link'
typeStory.onclick       = () => currentPostType.textContent = 'story'

contentAnimal.onclick   = () => currentPostContent.textContent = 'animals'
contentFood.onclick     = () => currentPostContent.textContent = 'food'
contentNews.onclick     = () => currentPostContent.textContent = 'news'
contentMemory.onclick   = () => currentPostContent.textContent = 'memories'
contentOpinion.onclick  = () => currentPostContent.textContent = 'an opinion'
contentTravel.onclick   = () => currentPostContent.textContent = 'a place'
contentDance.onclick    = () => currentPostContent.textContent = 'a dance'

createPost.onclick = () => {
    const type = currentPostType.textContent
    const content = currentPostContent.textContent
    
    const post = new Post(type, content)
    const newLikes = Math.floor(dashboard.followers * (1+P_SHARE[type][content]) * P_LIKES[type][content])
    
    distributeLikes(newLikes,14,post.addLikes.bind(post))
}
