import {useState} from "react";
import {clearNextMoves, nextMoves} from "./Pieces/Logic/Next moves/NextMoves";
import {gameField} from "./Pieces/Gamefield";
import {color1, color2} from "./Cells";

let dots, setDots

export function drawDots(){
    setDots(nextMoves)
}

export function clearField(){
    setDots([])
    clearNextMoves()
}

function Cutout({x,y}) {
    return <div
        className={"hole"}
        style={{
            background: y % 2 ?
                (x % 2 ? color1: color2):
                (x % 2? color2: color1),
            top: `${y * 60}px`,
            left: `${x * 60}px`
        }}>
    </div>;
}

function Dot({x,y}){
    return  (
        <>
            <div
                className={gameField[y][x] !== "0" ? "food": "dot"}
                style={{top: `${y * 60}px`, left: `${x * 60}px`}}>
            </div>
            {gameField[y][x] !== "0" && <Cutout x={x} y={y}/>}
        </>

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