(()=>{
function loop(t){
    window.requestAnimationFrame(t => {
        gainFollowers()
        dashboard.update()
        loop(t)
    })
}
loop(0)
})()