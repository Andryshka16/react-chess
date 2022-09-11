import {setKilled} from "../../../Eaten pieces/Eaten pieces";
import {gameField} from "../../Gamefield";
import {stateTable} from "../../piece";
import updateState from "./Update state";

export default function removePiece(x, y){
    setKilled(prev => [...prev, gameField[y][x]])
    updateState(stateTable[y][x], false)
    gameField[y][x] = "0"
}