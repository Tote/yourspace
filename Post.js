class Post{
    postElem
    likesElem
    likesCounter = 0
    constructor(type, topic){
        this.type = type
        this.topic = topic 
        this.postElem   = document.createElement('div')
        activePosts.insertBefore(this.postElem, activePosts.firstChild)
        this.render()
    }

    render(){
        this.postElem.innerHTML = `
            Your ${this.type} about ${this.topic} is active
            <span>
                ${this.likesCounter.toLocaleString()} likes
            </span>
        `
    }

    addLikes(likes){
        this.likesCounter += likes
        this.render()
    }
}