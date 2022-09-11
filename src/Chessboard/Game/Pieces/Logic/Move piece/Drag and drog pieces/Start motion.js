import {recentPieceCrd} from "../../../piece";
import unfollow from "./Cancel motion";
import followPointer from "./Active motion";

export let x, y, startingX, startingY
export let following, clearFollowing = () => following = false

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