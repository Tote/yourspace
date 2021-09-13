
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
    const trendBoost = TRENDS_CURRENT
                        .map( i => TRENDING_TOPICS[i])
                        .filter( tt => tt['affects'].includes(`${type}/${content}` ))
                        .map(tt => tt['boost'])
                        .reduce( (a,b) => a*b, 1)
                        ?? 1
    const newLikes = Math.floor(dashboard.followers * (1+P_SHARE[type][content]) * P_LIKES[type][content] * trendBoost)
    
    distributeLikes(newLikes,14, likes => post.addLikes(likes), ()=> post.deactivate())
    
    toggleScreen(screenFeed,screenPost)
}
