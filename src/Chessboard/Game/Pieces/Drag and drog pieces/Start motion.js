
export default function startFollowing(event, x, y){

    const startingX = event.clientX
    const startingY = event.clientY
    const target = event.target

    target.style.transition = "none"
    target.style.zIndex = "3"

    const follow = (event) => {
        target.style.left = `${x * 60 + event.x - startingX}px`
        target.style.top = `${y * 60 + event.y - startingY}px`
    }

    const unFollow = (event) => {

        let newX = x + Math.round((event.x - startingX) / 60)
        let newY = y + Math.round((event.y - startingY) / 60)

        // if (nextMovesInclude([newX, newY])){
        //     movePiece(newX, newY)
        // }

        target.style.transition = "170ms"
        target.style.zIndex = "2"

        target.style.top = `${y * 60}px`
        target.style.left = `${x * 60}px`

        window.removeEventListener("mousemove", follow)
        window.removeEventListener("mousemove", unFollow)
    }

    window.addEventListener("mousemove", follow)
    window.addEventListener("mouseup", unFollow)
}