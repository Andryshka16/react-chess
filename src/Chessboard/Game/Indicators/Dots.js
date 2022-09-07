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


function Indicate({x,y}){

    return (
        gameField[y][x]==="0" ?
            <Dot x={x} y={y}/>:
            <Target x={x} y={y}/>
    )
}

export default function Dots(){

    [dots, setDots] = useState([])

    return (
        dots.map(([x, y]) =>
                  <Indicate
                    x={x}
                    y={y}
                    key={`d${x}${y}`}
                  />)
    )
}