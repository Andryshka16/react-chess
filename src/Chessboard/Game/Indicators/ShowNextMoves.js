import { useSelector } from 'react-redux';
import {gameField} from "../Pieces/Gamefield";
import Dot from "./Dot";
import Target from "./Target";

export default function ShowNextMoves(){

    const { nextMoves } = useSelector(store => store.chess)
    console.log(nextMoves)

    return (
        nextMoves.map(([x, y]) =>
            gameField[y][x]==="0" ?
            <Dot x={x} y={y} key={`d${x}${y}`}/> :
            <Target x={x} y={y} key={`t${x}${y}`}/>
        )
    )
}