import {recentPieceCrd} from "../../piece";

export let following

let startingX, startingY
let x, y

function followPointer(event){
    following.style.top = `${y * 60 + event.y - startingY}px`
    following.style.left = `${x * 60 + event.x - startingX}px`
}

export default function follow(event){

    [x, y] = recentPieceCrd

    startingX = event.clientX
    startingY = event.clientY

    following = event.target

    following.style.transition = "none"

    window.addEventListener("mousemove", followPointer)
    window.addEventListener("mouseup", unfollow)
}
function unfollow(){

    following.style.transition = "170ms"

    following.style.top = `${y * 60}px`
    following.style.left = `${x * 60}px`

    following = false

    window.removeEventListener("mousemove", followPointer)
    window.removeEventListener("mouseup", unfollow)
}