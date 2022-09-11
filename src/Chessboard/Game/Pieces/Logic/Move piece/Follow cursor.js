import {recentPieceCrd} from "../../piece";

export let following

function followPointer(event){
    following.style.top = `${event.clientY - 37}px`
    following.style.left = `${event.clientX - 37}px`
}

export default function follow(event){
    following = event.target
    following.style.transition = "none"

    window.addEventListener("mousemove", followPointer)
    window.addEventListener("mouseup", unfollow)
}
function unfollow(){

    const [x, y] = recentPieceCrd
    following.style.transition = "170ms"

    following.style.top = `${y * 60}px`
    following.style.left = `${x * 60}px`

    following = false

    window.removeEventListener("mousemove", followPointer)
    window.removeEventListener("mouseup", unfollow)
}