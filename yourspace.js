const GOAL      = 8e9
const dashboard = new Dashboard()

function distributeLikes(likes, seconds){
    const N_INTERVALS   = 14
    const DISTRIBUTION  = [.001,.005,.017,.044,.092,.15,.191,.191,.15,.092,.044,.017,.005,.001]

    let currentInterval = 0
    let loop = setInterval(()=>{
        if(currentInterval < N_INTERVALS){
            let newLikes = likes * DISTRIBUTION[currentInterval++]
            dashboard.likes += newLikes
            console.log(`+${newLikes} likes`)
        } else {
            clearInterval(loop)
        }
    }, 1000*seconds/N_INTERVALS)
}
function gainFollowers(){
    dashboard.followers = Math.floor(dashboard.likes/10)
}
