class Dashboard{
    GOAL        = 8e9
    likes       = 8e9
    followers   = 0
    
    get progress(){
        return (100*this.followers/this.GOAL).toFixed(2)
    }

    update(){
        const updateText = (e,v) => e.textContent = v
        updateText(count, this.followers.toLocaleString())
        updateText(people, GOAL.toLocaleString())
        updateText(progress,`${this.progress}%`)
        updateText(likes, this.likes)
    }
}