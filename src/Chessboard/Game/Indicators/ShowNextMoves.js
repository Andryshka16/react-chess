import {useState} from "react";
import {clearNextMoves, nextMoves} from "../Pieces/Logic/Next moves/NextMoves";
import {gameField} from "../Pieces/Gamefield";
import Dot from "./Dot";
import Target from "./Target";

let dots, setDots

export function drawDots(){
    setDots(nextMoves)
}

export function clearField(){
    setDots([])
    clearNextMoves()
}


export default function ShowNextMoves(){

    [dots, setDots] = useState([])

    return (
        dots.map(([x, y]) =>
            gameField[y][x]==="0" ?
            <Dot x={x} y={y} key={`d${x}${y}`}/> :
            <Target x={x} y={y} key={`t${x}${y}`}/>
        )
    )
}