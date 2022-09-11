import {recentPieceCrd} from "../../piece";
import nextMovesInclude from "../Next moves/Nextmoves include";
import movePiece from "./Move piece";

export let following

let startingX, startingY
let x, y

function followPointer(event){
    following.style.top = `${y * 60 + event.y - startingY}px`
    following.style.left = `${x * 60 + event.x - startingX}px`
}

export default function startFollowing(event){

    [x, y] = recentPieceCrd

    startingX = event.clientX
    startingY = event.clientY

    following = event.target

    following.style.transition = "none"
    following.style.zIndex = "3"

    window.addEventListener("mousemove", followPointer)
    window.addEventListener("mouseup", unfollow)
}
function unfollow(event){

    let newX = x + Math.round((event.x - startingX) / 60)
    let newY = y + Math.round((event.y - startingY) / 60)

    if (nextMovesInclude([newX, newY])){
        movePiece(newX, newY)
    }

    following.style.transition = "170ms"
    following.style.zIndex = "2"

    following.style.top = `${y * 60}px`
    following.style.left = `${x * 60}px`

    following = false

    window.removeEventListener("mousemove", followPointer)
    window.removeEventListener("mouseup", unfollow)
}