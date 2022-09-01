import {useState} from "react";
import {clearNextMoves, nextMoves} from "./Pieces/Logic/Next moves/NextMoves";

let dots, setDots

export function drawDots(){
    setDots(nextMoves)
}

export function clearField(){
    setDots([])
    clearNextMoves()
}

export default function Dots(){

    [dots, setDots] = useState([])

    return (
        dots.map(([x,y])=>
            <div
                className = "dot"
                style = {{top: `${y*60}px`, left: `${x*60}px`}}
                key={"Dot"+x+y}>
            </div>
        )
    )
}