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
        <div class="post">
            <span>Your ${this.type} about ${this.topic}</span>
            <section class="action-bar">
                <span>♡${this.likesCounter.toLocaleString(undefined,{
                    notation: "compact",
                    compactDisplay: "short",
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 2
                  })}</span>
                <span>☺0</span>
            </section>
        </div>
        `
    }

    addLikes(likes){
        this.likesCounter += likes
        this.render()
    }

    deactivate(){
        inactivePosts.insertBefore(this.postElem, inactivePosts.firstChild)
    }


}