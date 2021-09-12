
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
contentTravel.onclick   = () => currentPostContent.textContent = 'travel'
contentDance.onclick    = () => currentPostContent.textContent = 'a dance'

createPost.onclick = () => {
    const post = new Post(currentPostType.textContent, currentPostContent.textContent)
    distributeLikes(1000000,14,post.addLikes.bind(post))
}
