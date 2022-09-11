import {following, startingX, startingY, x, y} from "./Start motion";

export default function followPointer(event){
    following.style.top = `${y * 60 + event.y - startingY}px`
    following.style.left = `${x * 60 + event.x - startingX}px`
}