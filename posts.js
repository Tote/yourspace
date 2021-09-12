function postText(){
    const post = new Post('text', 'dogs')
    distributeLikes(1000000,14,post.addLikes.bind(post))
}

textPost.onclick = (e,v) => postText()

