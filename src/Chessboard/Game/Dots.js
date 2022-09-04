import {useState} from "react";
import {clearNextMoves, nextMoves} from "./Pieces/Logic/Next moves/NextMoves";
import {gameField} from "./Pieces/Gamefield";

let dots, setDots

export function drawDots(){
    setDots(nextMoves)
}

export function clearField(){
    setDots([])
    clearNextMoves()
}

function Dot({x,y}){
    return  (
        <div
            className={gameField[y][x] !== "0" ? "food":"dot"}
            style={{top: `${y*60}px`, left: `${x*60}px`}}>
        </div>
    )
}


export default function Dots(){

    [dots, setDots] = useState([])

    return (
        dots.map(([x,y])=>
                  <Dot
                    x={x}
                    y={y}
                    key={`d${x}${y}`}
                  />
        )
    )
}