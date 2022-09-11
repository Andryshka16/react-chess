import nextMovesInclude from "../../Next moves/Nextmoves include";
import movePiece from "../Move piece";
import {clearFollowing, following, startingX, startingY, x, y} from "./Start motion";
import followPointer from "./Active motion";

export default function cancelFollowing(event){

    let newX = x + Math.round((event.x - startingX) / 60)
    let newY = y + Math.round((event.y - startingY) / 60)

    if (nextMovesInclude([newX, newY])){
        movePiece(newX, newY)
    }

    following.style.transition = "170ms"
    following.style.zIndex = "2"

    following.style.top = `${y * 60}px`
    following.style.left = `${x * 60}px`

    clearFollowing()

    window.removeEventListener("mousemove", followPointer)
    window.removeEventListener("mouseup", cancelFollowing)
}