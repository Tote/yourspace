const GOAL      = 8e9
const dashboard = new Dashboard()

function distributeLikes(likes, seconds, callbackDuring, callbackFinish){
    const N_INTERVALS   = 14
    const DISTRIBUTION  = [.001,.005,.017,.044,.092,.15,.191,.191,.15,.092,.044,.017,.005,.001]

    let currentInterval = 0
    let loop = setInterval(()=>{
        if(currentInterval < N_INTERVALS){
            let newLikes = likes * DISTRIBUTION[currentInterval++]
            dashboard.likes += newLikes
            callbackDuring(newLikes)
        } else {
            clearInterval(loop)
            callbackFinish()
        }
    }, 1000*seconds/N_INTERVALS)
}
function gainFollowers(){
    dashboard.followers = Math.floor(dashboard.likes/10)
    document.documentElement.style.setProperty('--progress', `${dashboard.progress}%`)
}
function toggleScreen(show, hide){
    show.style.display = 'block'
    hide.style.display = 'none'
}
function shortNumber(number){
    return number.toLocaleString(undefined,SHORT_NUMBER_FORMAT)
}